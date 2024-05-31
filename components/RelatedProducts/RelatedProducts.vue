<template>
    <section class="content-container section-spacing">
        <div class="heading-mb">
            <CollectionHeading class="text-center font-normal text-4xl max-w-lg mx-auto">You might also want to check out these products.</CollectionHeading>
        </div>
        <ProductPreviewGrid :products="products" />
    </section>
</template>
<script setup>
defineProps({
    products: Array,
})
</script>
