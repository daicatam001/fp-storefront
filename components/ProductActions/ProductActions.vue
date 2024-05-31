<template>
    <div class="space-y-6">
        <div class="text-3xl font-bold"> {{ useNumberCurrency(variant.calculated_price,
            storeCurrency.default_currency_code) }} </div>
        <MainButton label="Add to cart"
            class="w-full"
            @click="onAddToCart(variant.id)"
            :loading="saving"></MainButton>
    </div>
</template>
<script setup>
defineProps({
    variant: Object,
})

const storeCurrency = await useCurrentStore()
const { addToCart, cart, saving } = useCart()

const onAddToCart = async (variantId) => {
    const exitingItem = cart.value ? cart.value.line_items.find((item) => item.product_variant_id === variantId) : null
    await addToCart(variantId, exitingItem ? exitingItem.quantity + 1 : 1)
    const cartCountButton = document.querySelector('#cart-count-button')
    cartCountButton.click()
    setTimeout(() => {
        const cartPanelheader = document.querySelector('#overlay-panel-cart-header')
        if (cartPanelheader) {
            cartCountButton.click()
        }
    }, 3000)
}

</script>