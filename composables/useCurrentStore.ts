export const useCurrentStore = async (storeId?: string) => {
    const storeData = useState('current-store-data')
    if (storeData.value && (storeData.value.id === storeId || !storeId)) {
        return storeData
    }
    if (storeId) {
      try{
        const storeRes = await useApiFetch(`/stores/${storeId}`)
        storeData.value = storeRes.data
        return storeData
      }catch(e){
        console.log('e --->',e)
        throw createError({})
      }
    }
    storeData.value = { default_currency_code: 'USD', default_locale: 'en-US' }
    return storeData
}