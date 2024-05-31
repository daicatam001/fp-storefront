<template>
    <ClientOnly>
        <div class="py-12">
            <div class="content-container">
                <div v-if="cart && cart.line_items.length"
                    class="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-x-40">
                    <div class="flex flex-col bg-white py-6 gap-y-6">
                        <CartItems :items="cart.line_items" />
                    </div>
                    <div class="relative">
                        <div class="flex flex-col gap-y-8 sticky top-12">
                            <div class="bg-white py-6">
                                <CollectionHeading class="mb-8"> Summary </CollectionHeading>
                                <CartTotals :cart="cart" />
                                <div class="py-6">
                                    <NuxtLink to="/checkout">
                                        <MainButton label="Go to checkout"
                                            class="w-full"></MainButton>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <CartEmpty />
                </div>
            </div>
        </div>
    </ClientOnly>
</template>
<script setup>
const { cart } = useCart()
</script>