<template>
    <template v-if="!pending">
        <Hero></Hero>
        <FeatureProducts v-for="collection of categories"
            :collection="collection"></FeatureProducts>
        <NuxtLink to="/store/asdasdasdasd">to</NuxtLink>
    </template>
</template>
<script setup>
const route = useRoute()
const { data, error, pending } = await useAsyncData('store-data', async () => {
    const [categoriesRes] = await Promise.all([
        useApiFetch(`/categories?filter[store_id]=${route.params.storeId}&include=products&page=1&per_page=3`),
        useCurrentStore(route.params.storeId),
    ])
    return { categories: categoriesRes.data }
})



const categories = computed(() => data.value ? data.value.categories : [])

</script>