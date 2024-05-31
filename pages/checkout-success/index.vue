<template>
    <div class="content-container section-spacing">
        <CollectionHeading class="mb-8 flex items-center gap-4">
            <!-- <span class="text-green-500"><svg xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check-circle">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg></span> -->
            <span> Thank you for your order</span>
        </CollectionHeading>
        <div v-if="order"
            class="flex flex-col lg:flex-row gap-x-40 gap-y-10">
            <div>
                <p>Thank you for your purchase!</p>
                <p>Your order has been successfully processed.</p>
                <h2 class="text-xl lg:text-2xl mt-6"> Order information </h2>
                <div class="flex flex-col lg:flex-row gap-4 lg:gap-10">
                    <div>
                        <p class="uppercase text-slate-700 mb-0 lg:mb-2">Order number</p>
                        <div class="font-bold">{{ order.public_id }}</div>
                    </div>
                    <div>
                        <p class="uppercase text-slate-700  mb-0 lg:mb-2">Order date</p>
                        <div class="font-bold">{{ format(new Date(order.created_at), 'LLL dd, yyyy') }}</div>
                    </div>
                    <div>
                        <p class="uppercase text-slate-700  mb-0 lg:mb-2">Order total</p>
                        <div class="font-bold">{{ useNumberCurrency(order.total, order.currency_code) }}</div>
                    </div>
                    <div>
                        <p class="uppercase text-slate-700  mb-0 lg:mb-2">Payment status</p>
                        <div class="font-bold flex gap-2 items-center">
                            <span>{{ paymentStatusLabel[order.payment_status] }}</span>
                        </div>
                    </div>
                </div>
                <div class="mt-10 flex items-center gap-4"
                    v-if="state.paymentStatus !== PAYMENT_STATE.SUCCESSFUL">
                    <MainButton :label="isPaying ? 'Processing payment' : 'Pay now'"
                        :loading="isPaying"
                        @click="openPaymentWidget"
                        class="w-[300px]"></MainButton>
                    <div v-if="state.paymentStatus === PAYMENT_STATE.NOT_STARTED"> Process payment in {{ state.countDown
                        }}s </div>
                </div>
            </div>
            <div>
                <div class="lg:p-6 bg-slate-100">
                    <CheckoutItemsPreview :cart="order" />
                </div>
            </div>
        </div>
    </div>
    <Dialog :pt="dialog"
        :dismissableMask="true"
        v-model:visible="state.showPaymentSuccessDialog"
        modal
        :header="null"
        :style="{ width: '500px' }"
        :draggable="false"
        :closable="false">
        <div class="text-white bg-green-500 w-[80px] h-[80px] flex items-center justify-center rounded-full mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-check">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </div>
        <CollectionHeading class="text-center my-8">Payment Successful</CollectionHeading>
        <div class="text-center">
            <NuxtLink :to="'/'"
                ><MainButton>Continue shopping</MainButton></NuxtLink>
        </div>
    </Dialog>
</template>
<script setup>
import { format } from 'date-fns'
import { dialog } from '~/core/primevue'

// definePageMeta({
//     middleware: [
//         'checkout',
//     ],
// });

const { order } = useCart()

const PAYMENT_STATE = {
    NOT_STARTED: 'not_started',
    NOT_PAID: 'not_paid',
    SUCCESSFUL: 'successful',
    PAYING: 'paying',
}

const state = reactive({
    paymentStatus: PAYMENT_STATE.NOT_STARTED,
    countDown: 5,
    showPaymentSuccessDialog: false,
})



const paymentStatusLabel = {
    not_paid: 'Waiting for payment',
    successful: 'Payment successful',
}
const config = useRuntimeConfig()

const isPaying = computed(() => state.paymentStatus === 'paying')

let paymentWindow = null
let startPaymentTimer = null
let checkPaymentStatusTimer = null
let widgetOpenTimer = null
onMounted(() => {
    startPaymentTimer = setInterval(() => {
        state.countDown--
        if (state.countDown === 0) {
            openPaymentWidget()
        }
    }, 1000)
})

const openPaymentWidget = () => {
    clearInterval(startPaymentTimer)
    paymentWindow = window.open(
        `${config.public.paymentBase}/widget?order_id=${order.value.payment.reference_id}`,
        // `${config.public.paymentBase}/widget?order_id=${'PO-240529-C1B3'}`,
        '_blank',
    )
    state.paymentStatus = 'paying'
    widgetOpenTimer = setInterval(function () {
        if (paymentWindow.closed) {
            clearInterval(widgetOpenTimer);
            clearInterval(checkPaymentStatusTimer)
            state.paymentStatus = PAYMENT_STATE.NOT_PAID
        }
    }, 3000);
    checkPaymentStatusTimer = setInterval(async () => {
        const { data } = await $fetch(`${config.public.paymentBase}/api/v2/payment/polling/${order.value.payment.reference_id}`)
        if (data.status === PAYMENT_STATE.SUCCESSFUL) {
            clearInterval(checkPaymentStatusTimer)
            clearInterval(widgetOpenTimer)
            state.paymentStatus = PAYMENT_STATE.SUCCESSFUL
            order.value = {
                ...order.value,
                payment_status: PAYMENT_STATE.SUCCESSFUL,
            }
            setTimeout(() => {
                if (paymentWindow) {
                    paymentWindow.close()
                }
            }, 5000)
        }
    }, 3000)
}

onBeforeUnmount(() => {
    if (paymentWindow) {
        paymentWindow.close()
        clearInterval(checkPaymentStatusTimer)
        clearInterval(startPaymentTimer)
        clearInterval(widgetOpenTimer)
    }
})

watch(() => state.paymentStatus, (newVal) => {
    if (newVal === PAYMENT_STATE.SUCCESSFUL) {
        state.showPaymentSuccessDialog = true
    }
})

</script>
<style scoped>
/**
 * Extracted from: SweetAlert
 * Modified by: Istiak Tridip
 */
.success-checkmark {
    width: 80px;
    height: 115px;
    margin: 0 auto;

    .check-icon {
        width: 80px;
        height: 80px;
        position: relative;
        border-radius: 50%;
        box-sizing: content-box;
        border: 4px solid #4caf50;

        &::before {
            top: 3px;
            left: -2px;
            width: 30px;
            transform-origin: 100% 50%;
            border-radius: 100px 0 0 100px;
        }

        &::after {
            top: 0;
            left: 30px;
            width: 60px;
            transform-origin: 0 50%;
            border-radius: 0 100px 100px 0;
            animation: rotate-circle 4.25s ease-in;
        }

        &::before,
        &::after {
            content: "";
            height: 100px;
            position: absolute;
            background: #ffffff;
            transform: rotate(-45deg);
        }

        .icon-line {
            height: 5px;
            background-color: #4caf50;
            display: block;
            border-radius: 2px;
            position: absolute;
            z-index: 10;

            &.line-tip {
                top: 46px;
                left: 14px;
                width: 25px;
                transform: rotate(45deg);
                animation: icon-line-tip 0.75s;
            }

            &.line-long {
                top: 38px;
                right: 8px;
                width: 47px;
                transform: rotate(-45deg);
                animation: icon-line-long 0.75s;
            }
        }

        .icon-circle {
            top: -4px;
            left: -4px;
            z-index: 10;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            position: absolute;
            box-sizing: content-box;
            border: 4px solid rgba(76, 175, 80, 0.5);
        }

        .icon-fix {
            top: 8px;
            width: 5px;
            left: 26px;
            z-index: 1;
            height: 85px;
            position: absolute;
            transform: rotate(-45deg);
            background-color: #ffffff;
        }
    }
}

@keyframes rotate-circle {
    0% {
        transform: rotate(-45deg);
    }

    5% {
        transform: rotate(-45deg);
    }

    12% {
        transform: rotate(-405deg);
    }

    100% {
        transform: rotate(-405deg);
    }
}

@keyframes icon-line-tip {
    0% {
        width: 0;
        left: 1px;
        top: 19px;
    }

    54% {
        width: 0;
        left: 1px;
        top: 19px;
    }

    70% {
        width: 50px;
        left: -8px;
        top: 37px;
    }

    84% {
        width: 17px;
        left: 21px;
        top: 48px;
    }

    100% {
        width: 25px;
        left: 14px;
        top: 45px;
    }
}

@keyframes icon-line-long {
    0% {
        width: 0;
        right: 46px;
        top: 54px;
    }

    65% {
        width: 0;
        right: 46px;
        top: 54px;
    }

    84% {
        width: 55px;
        right: 0px;
        top: 35px;
    }

    100% {
        width: 47px;
        right: 8px;
        top: 38px;
    }
}
</style>