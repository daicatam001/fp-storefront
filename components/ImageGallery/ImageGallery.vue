<template>
  <div class="flex items-start relative">
    <div class="flex flex-col flex-1 lg:mx-16 lg:px-16 gap-y-4">
      <div :key="image"
        class="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
        v-for="image of images">
        <img :src="image"
          :priority="index <= 2 ? true : false"
          class="border absolute inset-0 rounded-rounded w-full h-full object-center object-cover"
          fill
          sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
          />
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  images: Array,
})

</script>