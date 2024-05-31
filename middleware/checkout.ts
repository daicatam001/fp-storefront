export default defineNuxtRouteMiddleware((to, from) => {
    const { cart } = useCart()
    if (!cart.value || !cart.value.line_items.length) {
        return navigateTo('/')
    }
})