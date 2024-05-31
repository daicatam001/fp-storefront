<template>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-16">
        <div v-for="product in products"
            :key="product.id">
            <ProductPreview :product="product" />
        </div>
    </div>
</template>
<script setup>
defineProps({
    products: Array,
})
</script>