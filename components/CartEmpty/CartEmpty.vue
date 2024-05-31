<template>
    <div class="py-48 px-2 flex flex-col justify-center items-start"
        data-testid="empty-cart-message">
        <CollectionHeading> Cart </CollectionHeading>
        <Text class="text-base-regular mt-4 mb-6 max-w-[32rem]"> You don&apos;t have anything in your cart. Let&apos;s
            change that, use the link below to start browsing our products. </Text>
        <div>
            <NuxtLink class="text-blue-600" href="/">Explore products</NuxtLink>
        </div>
    </div>
</template> 