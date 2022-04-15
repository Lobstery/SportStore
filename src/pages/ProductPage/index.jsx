import React from 'react'

import styles from './styles.module.scss'
import Container from '../../components/Container'
import ProductDetails from './Core/ProductDetails'
import Button from '../../components/UI/buttons/Button'

const ProductPage = () => {
    const product = { id: 1, name: 'Xiaomi Redmi Note 6', price: 32000, rating: 5, img: `http://cdn.desire.md/i.ashx?width=800&height=800&img=/i/products/840675_9_2692739.jpg` }
    return (
        <Container>
            <div className={styles.top}>
                <div className={styles.top__image}>
                    <img src={product.img} />
                </div>
                <ProductDetails addClass={styles.top__details} product={product} />
                <div className={styles.top__price}>
                    <p className={styles.top__price_price}>{product.price + " MDL"}</p>
                    <Button color='orange' addclass={styles.top__price_cart}>Adaugă în coș</Button>
                </div>
            </div>
        </Container >
    );
};

export default ProductPage
