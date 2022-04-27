import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';

import { fetchBrands, fetchProducts, fetchTypes } from '../../http/productAPI';
import Pages from '../../components/Pages';
import Container from '../../components/Container'
import BrandBar from './Core/BrandBar';
import ProductList from './Core/ProductList';
import TypeBar from './Core/TypeBar'
import styles from './styles.module.scss'

const Shop = () => {
    const { product } = useContext(Context)
    const [types, setTypes] = useState([])
    const [brands, setBrands] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchTypes().then(data => {
            product.setTypes(data)
            setTypes(data)
        })
        fetchBrands().then(data => {
            product.setBrands(data)
            setBrands(data)
        })
        fetchProducts().then(data => {
            product.setProducts(data.rows)
            setProducts(data.rows)
        })
    }, [])

    return (
        <Container>
            <div style={{ minHeight: window.innerHeight - 50 }} className={styles.shop}>
                <div className={styles.shop__asside}>
                    <TypeBar types={types} />
                </div>
                <main className={styles.shop__main}>
                    <BrandBar brands={brands} />
                    <ProductList className={styles.shop__prodlist} products={products} />
                    <Pages />
                </main>
            </div>
        </Container>
    );
};

export default Shop;
