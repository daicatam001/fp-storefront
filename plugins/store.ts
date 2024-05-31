export default defineNuxtPlugin(async () => {
    const route = useRoute()
    await useCurrentStore(route.params.storeId)
})