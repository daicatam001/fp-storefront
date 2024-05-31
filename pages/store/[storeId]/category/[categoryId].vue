<template>
    <div class="section-spacing content-container">
        <div class="heading-mb">
            <CollectionHeading :tag="'h1'"> {{ data.category.name }} </CollectionHeading>
        </div>
        <ProductPreviewGrid :products="data.category.products" />
        <!-- <div class="mt-20 flex-center">
            <Pagination></Pagination>
        </div> -->
    </div>
</template>
<script setup>
const route = useRoute()
const { data } = await useAsyncData('category-data', async () => {
    const [categoryRes] = await Promise.all([
        useApiFetch(`/categories?filter[id]=${route.params.categoryId}&page=1&per_page=1&include=products`),
        useCurrentStore(route.params.storeId),
    ])
    return { category: categoryRes.data && categoryRes.data.length ? categoryRes.data[0] : null }
})


</script>