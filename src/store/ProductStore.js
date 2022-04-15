
export default class ProductStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Benzi de alergat' },
            { id: 2, name: 'Anaerobe' },
            { id: 3, name: 'Ciclism' },
            { id: 4, name: 'Masajoare' },
        ]
        this._brands = [
            { id: 1, name: 'Xiaomi' },
            { id: 2, name: 'Apple' },
            { id: 3, name: 'Samsung' },
            { id: 4, name: 'FunFit' },
        ]
        this._products = [
            { id: 1, name: 'Xiaomi Redmi Note 6', price: 32000, rating: 5, img: `http://cdn.desire.md/i.ashx?width=800&height=800&img=/i/products/840675_9_2692739.jpg` },
            { id: 2, name: 'Xiaomi Redmi Note 7', price: 32000, rating: 4.7, img: `http://cdn.desire.md/i.ashx?width=800&height=800&img=/i/products/840675_9_2692739.jpg` },
            { id: 3, name: 'Xiaomi Redmi Note 8', price: 32000, rating: 4.5, img: `http://cdn.desire.md/i.ashx?width=800&height=800&img=/i/products/840675_9_2692739.jpg` },
            { id: 4, name: 'Xiaomi Redmi Note 9', price: 32000, rating: 4, img: `http://cdn.desire.md/i.ashx?width=800&height=800&img=/i/products/840675_9_2692739.jpg` },
            { id: 5, name: 'Xiaomi Redmi Note 9', price: 32000, rating: 3.5, img: `http://cdn.desire.md/i.ashx?width=800&height=800&img=/i/products/840675_9_2692739.jpg` },
            { id: 6, name: 'Xiaomi Redmi Note 9', price: 32000, rating: 3.2, img: `http://cdn.desire.md/i.ashx?width=800&height=800&img=/i/products/840675_9_2692739.jpg` },
            { id: 7, name: 'Xiaomi Redmi Note 9', price: 32000, rating: 3, img: `http://cdn.desire.md/i.ashx?width=800&height=800&img=/i/products/840675_9_2692739.jpg` },
            { id: 8, name: 'Xiaomi Redmi Note 9', price: 32000, rating: 2.5, img: `http://cdn.desire.md/i.ashx?width=800&height=800&img=/i/products/840675_9_2692739.jpg` },
            { id: 9, name: 'Xiaomi Redmi Note 9', price: 32000, rating: 1, img: `http://cdn.desire.md/i.ashx?width=800&height=800&img=/i/products/840675_9_2692739.jpg` },
            { id: 10, name: 'Xiaomi Redmi Note 91', price: 32000, rating: 0.5, img: `http://cdn.desire.md/i.ashx?width=800&height=800&img=/i/products/840675_9_2692739.jpg` },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        this._user = {}
    }
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setProducts(products) {
        this._products = products
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get products() {
        return this._products
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}