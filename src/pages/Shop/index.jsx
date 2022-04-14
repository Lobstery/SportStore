import React from 'react';

import Container from '../../components/Container'
import TypeBar from './Core/TypeBar'
import styles from './styles.module.scss'

const Shop = () => {
    return (
        <Container>
            <div className={styles.shop}>
                <asside className={styles.shop_asside}>
                    <TypeBar />
                </asside>
            </div>
        </Container >
    );
};

export default Shop;
