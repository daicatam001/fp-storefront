<template>
  <div class="sticky top-0 inset-x-0 z-50 group">
    <header class="relative h-16 mx-auto border-b shadow duration-200 bg-white border">
      <nav class="content-container relative flex items-center justify-center w-full h-full text-small-regular">
        <div class="mx-auto">
          <NuxtLink href="/"
            class="uppercase"
            data-testid="nav-store-link"> FasterPay Store </NuxtLink>
        </div>
        <div class="absolute right-4 -translate-y-1/2"
          v-if="!isCheckoutPage">
          <ClientOnly>
            <div class="cursor-pointer"
              ref="cartCountRef"
              id="cart-count-button"
              @click="onToggleCartHeader">Cart ({{ cartCount }})</div>
            <OverlayPanel :pt="overlaypanel"
              id="overlay-panel-cart-header"
              ref="cartHeaderRef">
              <div>
                <div class="w-[400px]">
                  <div class="p-4 flex items-center justify-center">
                    <h3 class="">Cart</h3>
                  </div>
                  <template v-if="cart && cart.line_items.length">
                    <div class="overflow-y-scroll max-h-[402px] px-4 grid grid-cols-1 gap-y-8 no-scrollbar p-px">
                      <div v-for="item in cart.line_items"
                        class="grid  grid-cols-[48px_1fr_30px] lg:grid-cols-[96px_1fr_30px] gap-x-4"
                        :key="item.id"
                        data-testid="cart-item">
                        <NuxtLink class="flex lg:w-24 w-12"
                          :to="`/store/${currentStore.id}/product/${item.original_product_id}`">
                          <div
                            class="rounded-lg relative w-full overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 aspect-[1/1]">
                            <img :src="useProductThumbnail(item)"
                              class="absolute inset-0 w-full h-full object-cover">
                          </div>
                        </NuxtLink>
                        <div>
                          <h4 class="overflow-hidden text-ellipsis mb-1 font-normal">
                            <NuxtLink :to="`/store/${currentStore.id}/product/${item.original_product_id}`"> {{
                              item.title }} </NuxtLink>
                          </h4>
                          <div class="text-slate-500"> Quantity: {{ item.quantity }} </div>
                          <div class="mt-2"> {{ useNumberCurrency(item.total, currentStore.default_currency_code) }}
                          </div>
                        </div>
                        <div class="text-slate-500 hover:text-red-500 ">
                        <IconTrash class="cursor-pointer" @click="removeFromCart(item.id)"></IconTrash> 
                        </div>
                      </div>
                    </div>
                    <div class="p-4 flex flex-col gap-y-4 text-small-regular">
                      <div class="flex items-center justify-between">
                        <span> Subtotal </span>
                        <span data-testid="cart-subtotal"> {{ useNumberCurrency(cart.subtotal,
                          currentStore.default_currency_code) }} </span>
                      </div>
                      <MainButton class="w-full"
                        @click="onGoToCart"
                        data-testid="go-to-cart-button"> Go to cart </MainButton>
                    </div>
                  </template>
                  <div v-else
                    class="flex items-center justify-center"> Your cart is empty. </div>
                </div>
              </div>
            </OverlayPanel>
          </ClientOnly>
        </div>
      </nav>
    </header>
  </div>
</template>
<script setup>
import { overlaypanel } from '~/core/primevue'
const { cartCount, cart,removeFromCart } = useCart()
const route = useRoute()
const cartHeaderRef = ref()
const cartCountRef = ref()
const currentStore = await useCurrentStore()

const onToggleCartHeader = (event) => {
  cartHeaderRef.value.toggle(event);
}

const onGoToCart = () => {
  cartHeaderRef.value.hide()
  navigateTo('/cart')
}

const isCheckoutPage = computed(() => {
  console.log(route.path)
  return ['/checkout', '/checkout-success'].includes(route.path)
})

</script>