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
    const [totalCount, setTotalCount] = useState(0)
    const [activePage, setActivePage] = useState(product.page)
    const [activeBrand, setActiveBrand] = new useState(product.selectedBrand)
    const [activeType, setActiveType] = new useState(product.selectedType)


    useEffect(() => {
        fetchTypes().then(data => {
            product.setTypes(data)
            setTypes(data)
        })
        fetchBrands().then(data => {
            product.setBrands(data)
            setBrands(data)
        })
        fetchProducts(null, null, 2, 3).then(data => {
            product.setProducts(data.rows)
            setProducts(data.rows)
            product.setTotalCount(data.count)
            setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProducts(activeBrand.id, activeType.id, activePage, 3).then(data => {
            product.setProducts(data.rows)
            setProducts(data.rows)
            product.setTotalCount(data.count)
            setTotalCount(data.count)
        })
    }, [activePage, activeType, activeBrand])

    return (
        <Container>
            <div style={{ minHeight: window.innerHeight - 50 }} className={styles.shop}>
                <div className={styles.shop__asside}>
                    <TypeBar setActivePage={setActivePage} activeType={activeType} setActiveType={setActiveType} types={types} />
                </div>
                <main className={styles.shop__main}>
                    <BrandBar setActivePage={setActivePage} isActive={activeBrand} setIsActive={setActiveBrand} brands={brands} />
                    <ProductList className={styles.shop__prodlist} products={products} />
                    <Pages activePage={activePage} setActivePage={setActivePage} totalCount={totalCount} />
                </main>
            </div>
        </Container>
    );
};

export default Shop;
