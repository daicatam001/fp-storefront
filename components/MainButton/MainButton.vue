
<template>
    <Button :pt="button" v-bind="$attrs">
        <slot></slot>
    </Button>
</template>
<script setup>
import { button } from '~/core/primevue';
</script>