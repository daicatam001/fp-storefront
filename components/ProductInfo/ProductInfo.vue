<template>
    <div id="product-info">
        <div class="space-y-6 lg:max-w-[500px] mx-auto">
            <p class="text-slate-400 " v-if="product.categories && product.categories.length">
                <NuxtLink :to="`/store/${currentStore.id}/category/${cat.id}`"
                    v-for="(cat, index) of product.categories"> {{ cat.name }} <span
                    v-if="index !== product.categories.length - 1">,</span> </NuxtLink> 
            </p>
            <h1 class="font-normal"> {{ product.title }}</h1>
            <p>{{ product.short_description }}</p>
        </div>
    </div>
</template>
<script setup>
defineProps({
    product: Object,
})

const currentStore = await useCurrentStore()
</script>