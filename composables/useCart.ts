import { ORDER } from "~/core/dummy"

export const useCart = () => {
    const saving = useState('cart-saving', () => false)
    const cart = useState('cart')
    const order = useState('order', () => ORDER)


    const cartCount = computed(() => {
        return cart.value ? cart.value.line_items.length : 0
    })
    const cartTotal = computed(() => {
        return cart.value ? cart.value.total : 0
    })
    const addToCart = async (variantId: string, quantity = 1) => {
        saving.value = true
        try {
            if (!cart.value) {
                const cartRes = await useApiFetch('/carts', { method: 'POST' })
                cart.value = cartRes.data
            }
            const existingItem = cart.value.line_items.find((item: any) => item.product_variant_id === variantId)
            if (existingItem) {
                const cartRes = await useApiFetch(`/carts/${cart.value.id}/line-items/${existingItem.id}?include=product`,
                    {
                        method: 'PUT',
                        body: { quantity: quantity }
                    })
                cart.value = cartRes.data

            } else {
                const cartRes = await useApiFetch(`/carts/${cart.value.id}/line-items`,
                    {
                        method: 'POST',
                        body: { variant_id: variantId, quantity: quantity }
                    })
                cart.value = cartRes.data
            }
            localStorage.setItem('cartId', cart.value.id)
        } catch (e) { }
        saving.value = false
    }
    const removeFromCart = async (variantId) => {
        const cartRes = await useApiFetch(`/carts/${cart.value.id}/line-items/${variantId}`,
            {
                method: 'DELETE',
            })
        cart.value = cartRes.data
    }

    const getCart = async () => {
        try {
            const cartRes = await useApiFetch(`/carts/${localStorage.getItem('cartId')}`,
                {
                    method: 'GET',
                })
            cart.value = cartRes.data
        } catch (e) {
            localStorage.removeItem('cartId')
        }
    }

    const completeCart = async (billingInfo) => {
        if (!cart.value) {
            return
        }
        saving.value = true
        try {
            const orderRes = await useApiFetch(`/carts/${cart.value.id}/guest-complete`, {
                method: 'POST',
                // data: formData
                body: {
                    line_items_ids: cart.value.line_items.map((item: any) => item.id),
                    customer: {
                        email: billingInfo.email,
                        first_name: billingInfo.firstName,
                        last_name: billingInfo.lastName
                    }
                }
            })
            order.value = orderRes.data
            await getCart()
            navigateTo('/checkout-success')
        } catch (e) { }
        saving.value = false
    }

    const initCart = () => {
        if (process.client && localStorage.getItem('cartId') && !cart.value) {
            getCart()
        }
    }



    return { cart, order, saving, cartCount, cartTotal, addToCart, removeFromCart, completeCart, getCart, initCart }
}