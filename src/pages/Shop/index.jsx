import React from 'react';

import Container from '../../components/Container'
import BrandBar from './Core/BrandBar';
import ProductList from './Core/ProductList';
import TypeBar from './Core/TypeBar'
import styles from './styles.module.scss'

const Shop = () => {
    return (
        <Container>
            <div className={styles.shop}>
                <div className={styles.shop__asside}>
                    <TypeBar />
                </div>
                <main className={styles.shop__main}>
                    <BrandBar />
                    <ProductList />
                </main>
            </div>
        </Container>
    );
};

export default Shop;
