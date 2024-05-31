export const useProductThumbnail = (product: any) => {
    if (!product) {
        return ''
    }
    if (product.thumbnail) {
        return product.thumbnail.original_url
    }
    if (product.images && product.images.length) {
        return product.images[0].original_url
    }
    return ''
}