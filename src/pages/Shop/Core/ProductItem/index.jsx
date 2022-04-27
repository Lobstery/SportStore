import React from 'react'
import { useNavigate } from 'react-router-dom'

import RatingBar from '../../../../components/RatingBar'
import styles from './styles.module.scss'
import { PRODUCT_ROUTE } from '../../../../utils/consts'
import { REACT_APP_API_URL } from '../../../../utils/consts'

const ProductItem = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div
            onClick={() => navigate(PRODUCT_ROUTE + "/" + product.id)}
            className={styles.item}>
            <img className={styles.item__img} src={REACT_APP_API_URL + product.img} />
            <p className={styles.item__title}>{product.name}</p>
            <div className={styles.item__price_row}>
                <button className={styles.item__cart}></button>
                <span className={styles.item__price}>{product.price + " MDL"}</span>
            </div>
            <RatingBar rate={product.rating}></RatingBar>
        </div >
    );
};

export default ProductItem;
