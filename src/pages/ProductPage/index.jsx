import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from './styles.module.scss'
import Container from '../../components/Container'
import ProductDetails from './Core/ProductDetails'
import Button from '../../components/UI/buttons/Button'
import ProductCharacteristic from './Core/ProductCharacteristic'
import { REACT_APP_API_URL } from '../../utils/consts'
import { fetchOneProduct, fetchOneProductRating } from '../../http/productAPI'

const ProductPage = () => {
    const [product, setProduct] = useState({ img: '', info: [] })

    const { id } = useParams()
    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])

    return (
        <Container>
            <div className={styles.top}>
                <div className={styles.top__image}>
                    <img src={product.img != '' ? REACT_APP_API_URL + product.img : ''} />
                </div>
                <ProductDetails className={styles.top__details} product={product} />
                <div className={styles.top__price}>
                    <p className={styles.top__price_price}>{product.price + " MDL"}</p>
                    <Button color='orange' addclass={styles.top__price_cart}>Add in cart</Button>
                </div>
            </div>
            <div className={styles.bottom}>
                <p className={styles.bottom__title}>Characteristics</p>
                {
                    product.info.map((info, index) =>
                        <ProductCharacteristic key={info.id} info={info} index={index} />
                    )
                }
            </div>
        </Container >
    );
};

export default ProductPage
