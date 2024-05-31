<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <section class="content-container section-spacing">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto text-center">
                <h1 class="mb-4 text-7xl tracking-tight font-bold lg:text-9xl text-blue-600 "> 404</h1>
                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">Page not found</p>
                <p class="mb-8 text-lg font-light text-gray-500 ">Sorry, we can't find that page. You'll find lots to
                    explore on the home. </p>
                <NuxtLink to="/">
                    <MainButton>Back to Home</MainButton>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
