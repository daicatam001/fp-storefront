<template>
        <div class="flex flex-col-reverse lg:flex-col gap-y-8 py-8 lg:py-0 ">
            <div class="w-full bg-white flex flex-col">
                <CollectionHeading class="mb-8"> In your Cart </CollectionHeading>
                <CartTotals :cart="cart" />
                <div class="-mx-4">
                    <CheckoutItemsPreview :cart="cart" />
                </div>
                <div class="py-6">
                    <MainButton :loading="saving"
                        type="submit"
                        form="billing-info-form"
                        label="Checkout"
                        class="w-full"></MainButton>
                </div>
            </div>
        </div>
</template>
<script setup>

const { cart, saving } = useCart()
</script>