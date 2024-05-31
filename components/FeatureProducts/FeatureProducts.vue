<template>
    <section class="content-container section-spacing">
        <div class="flex justify-between gap-4 mb-8">
            <h2 class="mb-0 font-normal">{{ collection.name }}</h2>
            <NuxtLink :to="`/store/${currentStore.id}/category/${collection.id}`"
                class="text-blue-600">
                <svg class="lg:hidden relative top-[5px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <line x1="5"
                        y1="12"
                        x2="19"
                        y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
                <span class="hidden lg:block">View all</span>
            </NuxtLink>
        </div>
        <ProductPreviewGrid :products="collection.products" />
    </section>
</template>
<script setup>
defineProps({
    collection: Object,
})

const currentStore = await useCurrentStore()
</script>
