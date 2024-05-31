<template>
    <NuxtLink :to="to" class="btn">
        <slot></slot>
    </NuxtLink>
</template>
<script setup>
defineProps({
    to: String,
})

</script>
<style>

</style>