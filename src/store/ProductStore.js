import { makeAutoObservable } from "mobx"

export default class ProductStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Frigidere' },
            { id: 2, name: 'Frigidere' },
        ]
        this._brands = [
            { id: 1, name: 'Xiaomi' },
            { id: 2, name: 'Apple' },
        ]
        this._products = [
            { id: 1, name: 'Xiaomi Redmi Note 9', price: 32000, rating: 3, img: `https://i.pinimg.com/originals/f4/b7/e8/f4b7e8e2a142f3479ef562b878d42cf0.jpg` },
            { id: 2, name: 'Xiaomi Redmi Note 9', price: 32000, rating: 3, img: `https://i.pinimg.com/originals/f4/b7/e8/f4b7e8e2a142f3479ef562b878d42cf0.jpg` },
            { id: 3, name: 'Xiaomi Redmi Note 9', price: 32000, rating: 3, img: `https://i.pinimg.com/originals/f4/b7/e8/f4b7e8e2a142f3479ef562b878d42cf0.jpg` },
            { id: 4, name: 'Xiaomi Redmi Note 9', price: 32000, rating: 3, img: `https://i.pinimg.com/originals/f4/b7/e8/f4b7e8e2a142f3479ef562b878d42cf0.jpg` },
        ]
        this._user = {}
        makeAutoObservable(this)
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
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get products() {
        return this._products
    }
}