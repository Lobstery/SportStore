import React from 'react'

import styles from './styles.module.scss'
import Container from '../../components/Container'
import ProductDetails from './Core/ProductDetails'
import Button from '../../components/UI/buttons/Button'
import ProductCharacteristic from './Core/ProductCharacteristic'

const ProductPage = () => {
    const product = { id: 1, name: 'Xiaomi Redmi Note 6', price: 32000, rating: 5, img: `http://cdn.desire.md/i.ashx?width=800&height=800&img=/i/products/840675_9_2692739.jpg` }
    const descriptions = [
        { id: 1, title: "Viteza maxima", description: "50 km/h" },
        { id: 2, title: "Viteza minima", description: "5 km/h" },
        { id: 3, title: "Numar de viteze", description: "10" },
        { id: 4, title: "Greutate", description: "70 kg" },
        { id: 5, title: "Greutate", description: "70 kg" },
        { id: 6, title: "Greutate", description: "70 kg" },
        { id: 7, title: "Greutate", description: "70 kg" },
    ]
    return (
        <Container>
            <div className={styles.top}>
                <div className={styles.top__image}>
                    <img src={product.img} />
                </div>
                <ProductDetails addClass={styles.top__details} product={product} />
                <div className={styles.top__price}>
                    <p className={styles.top__price_price}>{product.price + " MDL"}</p>
                    <Button color='orange' addclass={styles.top__price_cart}>Add in cart</Button>
                </div>
            </div>
            <div className={styles.bottom}>
                <p className={styles.bottom__title}>Characteristics</p>
                {
                    descriptions.map((info, index) =>
                        <ProductCharacteristic key={info.id} info={info} index={index} />
                    )
                }
            </div>
        </Container >
    );
};

export default ProductPage
