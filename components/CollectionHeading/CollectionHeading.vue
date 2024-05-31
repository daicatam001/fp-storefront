<template>
    <component :is="tag"
        :class="twMerge('text-2xl xl:text-4xl font-medium mt-0 mb-0',$attrs.class)">
        <slot></slot>
    </component>
</template>
<script setup>
import { twMerge } from 'tailwind-merge'

const props = defineProps({
    tag: {
        type: String,
        default: 'h2'
    },
    
});
</script>