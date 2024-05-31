<template>
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_416px] content-container gap-x-40 section-spacing ">
        <CheckoutForm />
        <CheckoutSummary />
    </div>
</template>
<script setup>
definePageMeta({
  middleware: [
    'checkout',
  ],
});
</script>