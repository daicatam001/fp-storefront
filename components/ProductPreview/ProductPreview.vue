<template>
    <NuxtLink :to="`/store/${currentStore.id}/product/${product.id}`"
        v-if="variant"
        class="group">
        <div>
            <div
                class="rounded-lg relative overflow-hidden p-4  shadow-elevation-card-rest rounded-large group-hover:shadow transition-shadow ease-in-out duration-150 aspect-[11/14] w-full">
                <img alt="Thumbnail"
                    :src="thumbnail"
                    class="absolute inset-0 object-cover w-full h-full object-center"
                    draggable="false"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill">
            </div>
            <div class="mt-4 flex flex-col lg:flex-row justify-between lg:gap-6">
                <h3 class="text-base lg:text-lg font-normal mb-0">{{ variant.title }}</h3>
                <div class="text-slate-600">
                    {{ useNumberCurrency(variant.calculated_price, currency) }}
                </div>
               
            </div>
        </div>
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
    product: Object,
    currency: String,
})


const currentStore = await useCurrentStore()
const variant = computed(() => {
    if (props.product.variants && props.product.variants.length) {
        return props.product.variants[0]
    }
    return null
})

const thumbnail = computed(() => {
    return useProductThumbnail(variant.value)
})

const currency = computed(()=> {
    return props.currency ||  currentStore.value.default_currency_code
})


</script>