<template>
    <DataTable :value="cart.line_items"
        class="checkout-item-preview-table"
        :pt="datatable">
        <Column field="item">
            <template #body="slotProps">
                <NuxtLink class="flex w-12"
                    :to="`/store/${currentStore.id}/product/${slotProps.data.original_product_id}`">
                    <div
                        class="rounded-lg relative w-full overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 aspect-[1/1]">
                        <img :src="useProductThumbnail(slotProps.data)"
                            class="absolute inset-0 w-full h-full object-cover">
                    </div>
                </NuxtLink>
            </template>
        </Column>
        <Column field="name">
            <template #body="slotProps">
                <NuxtLink :to="`/store/${currentStore.id}/product/${slotProps.data.original_product_id}`">
                    <p class="font-normal "> {{ slotProps.data.title
                        }} </p>
                </NuxtLink>
            </template>
        </Column>
        <Column field="total">
            <template #body="slotProps">
                <div class="text-slate-500 whitespace-nowrap text-right">{{ slotProps.data.quantity }}x {{
                    useNumberCurrency(slotProps.data.unit_price, currentStore.default_currency_code) }} </div>
                <div class="text-right">{{ useNumberCurrency(slotProps.data.total, currentStore.default_currency_code) }}</div>
            </template>
        </Column>
    </DataTable>
</template>
<script setup>
import { datatable } from '~/core/primevue'



const props = defineProps({
    cart: Object,
})

const currentStore = await useCurrentStore()

// console.log(props.cart.line_items)

</script>
<style>
.checkout-item-preview-table th {
    @apply hidden
}
</style>