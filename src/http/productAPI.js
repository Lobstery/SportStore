import { $authHost, $host } from "./index"

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand')
    return data
}

export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/product', product)
    return data
}

export const fetchProducts = async (brandId, typeId, page, limit = 5) => {
    const { data } = await $host.get('api/product', {
        params: {
            typeId, brandId, page, limit
        }
    })
    return data
}

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get('api/product/' + id)
    return data
}

export const createRating = async (rating) => {
    const { data } = await $host.post('api/rating', rating)
    return data
}

export const fetchOneProductRating = async (id) => {
    const { data } = await $host.get('api/rating', {
        params: {
           id
        }
    })
    return data
}




