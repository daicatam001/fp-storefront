<template>
    <div class="divide-y divide-solid">
        <div class="space-y-4 py-6">
            <div class="flex justify-between">
                <span class="text-slate-500">Subtotal</span>
                <span>{{ useNumberCurrency(cart.subtotal, currentStore.default_currency_code) }}</span>
            </div>
        </div>
        <div class="flex justify-between py-6">
            <span>Total</span>
            <span class="font-bold">{{ useNumberCurrency(cart.total, currentStore.default_currency_code) }}</span>
        </div>
    </div>
</template>
<script setup>
defineProps({
    cart: Object,
})

const currentStore = await useCurrentStore()
</script>