export default defineNuxtPlugin(async () => {
    const { cart, getCart } = useCart()
    if (localStorage.getItem('cartId') && !cart.value) {
        await getCart()
    }
})