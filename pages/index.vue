<template>
</template>
<script setup>
import { PRODUCTS } from '~/core/dummy'
const config = useRuntimeConfig()
const { data: storeRes } = await useAsyncData('stores', () => {
    return $fetch('/stores', { baseURL: config.public.apiBase })
})

if (storeRes.value.data.length) {
    await navigateTo('/store/' + storeRes.value.data[0].id)
}

</script>