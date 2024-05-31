<template>
    <div class="content-container flex flex-col lg:flex-row items-start section-spacing relative"
        data-testid="product-container">
        <div class="flex flex-col lg:py-0 lg:max-w-[300px] w-full py-8 gap-y-6">
            <ProductInfo :product="data.product" />
            <ProductTabs :product="data.product" />
        </div>
        <div class="block w-full relative">
            <ImageGallery :images="[thumbnail]" />
        </div>
        <div class="flex flex-col lg:py-0 lg:max-w-[300px] w-full py-8 gap-y-12">
            <ProductActions :variant="variant" />
        </div>
    </div>
    <RelatedProducts :products="data.relatedProducts" />
</template>
<script setup>
const route = useRoute()
console.log(route.params)
const { data } = await useAsyncData('product-data', async () => {
    console.log(1)
    const [productRes, relatedProductsRes, _] = await Promise.all([
        useApiFetch(`/products/${route.params.productId}`),
        useApiFetch(`/products/${route.params.productId}/related-products?include=variants&page=1&per_page=3`),
        useCurrentStore(route.params.storeId)
    ])
    console.log(productRes)
    return { product: productRes.data, relatedProducts: relatedProductsRes.data }
})

console.log(data.value)
const variant = computed(() => {
    if (data.value.product.variants && data.value.product.variants.length) {
        return data.value.product.variants[0]
    }
    return data.value.product
})

const thumbnail = computed(() => {
    return useProductThumbnail(variant.value)
})

</script>