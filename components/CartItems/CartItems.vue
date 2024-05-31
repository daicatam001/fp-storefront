<template>
    <div>
        <div class="mb-8">
            <CollectionHeading>Cart</CollectionHeading>
        </div>
        <DataTable :value="items"
            :pt="datatable">
            <Column field="item"
                class="hidden lg:table-cell"
                header="Item">
                <template #body="slotProps">
                    <NuxtLink class="flex lg:w-24 w-12"
                        :to="`/store/${currentStore.id}/product/${slotProps.data.original_product_id}`">
                        <div
                            class="rounded-lg relative w-full overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 aspect-[1/1]">
                            <img :src="useProductThumbnail(slotProps.data)"
                                class="absolute inset-0 w-full h-full object-cover">
                        </div>
                    </NuxtLink>
                </template>
            </Column>
            <Column field="name"
                class="hidden lg:table-cell"
                header="">
                <template #body="slotProps">
                    <NuxtLink 
                        :to="`/store/${currentStore.id}/product/${slotProps.data.original_product_id}`">
                        <p class="font-normal ">{{ slotProps.data.title }}
                        </p>
                    </NuxtLink>
                </template>
            </Column>
            <Column field="name"
                class="lg:hidden"
                header="Item">
                <template #body="slotProps">
                    <NuxtLink 
                        :to="`/store/${currentStore.id}/product/${slotProps.data.original_product_id}`">
                        <p class="font-normal ">Pinnacle Posh Pack
                        </p>
                    </NuxtLink>
                </template>
            </Column>
            <Column field="quantity"
                style="width: 150px"
                header="Quantity">
                <template #body="slotProps">
                    <div class="flex gap-1 items-center">
                        <Dropdown :pt="dropdown"
                            class="w-[70px]"
                            v-model="state.items[slotProps.index].quantity"
                            :disabled="state.items[slotProps.index].updating"
                            @change="updateQuantity(slotProps.index, $event.value)"
                            :options="quantityOptions" />
                        <ProgressSpinner class="!w-6 !h-6"
                            :class="{ 'invisible': !state.items[slotProps.index].updating }"></ProgressSpinner>
                    </div>
                </template>
            </Column>
            <Column field="unit_price"
                class="hidden lg:table-cell text-right flex-end"
                header="Price">
                <template #body="slotProps">
                    <div class="text-slate-600 ">{{ useNumberCurrency(slotProps.data.unit_price,
                        currentStore.default_currency_code) }}</div>
                </template>
            </Column>
            <Column
            class="text-right"
            field="total"
                header="Total">
                <template #body="slotProps">
                    <div>{{ useNumberCurrency(slotProps.data.total, currentStore.default_currency_code) }}</div>
                </template>
            </Column>
            <Column
            class=""
            field="remvoe"
                header="">
                <template #body="slotProps">
                    <div class="text-slate-500 hover:text-red-500 ">
                        <IconTrash class="cursor-pointer" @click="removeFromCart(slotProps.data.id)"></IconTrash> 
                        </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>
<script setup>
import { datatable, dropdown } from '@/core/primevue'
const props = defineProps({
    items: Array,
})

const state = reactive({
    items: props.items || [],
})

const currentStore = await useCurrentStore()
const { addToCart,removeFromCart  } = useCart()
const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const updateQuantity = async (index, quantity) => {
    state.items[index].updating = true
    await addToCart(state.items[index].product_variant_id, quantity)
    state.items[index].updating = false
}

</script>