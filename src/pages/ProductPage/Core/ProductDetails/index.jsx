import React, { useState } from 'react'

import styles from './styles.module.scss'
import RatingBar from '../../../../components/RatingBar'
import classNames from 'classnames';

const ProductDetails = ({product, className}) => {
    return (
        <div className={classNames(styles.details, className)}>
            <h2>{product.name}</h2>
            <div className={styles.details_category}>
                <span className={styles.details_category_name}>Category Name</span>
                <span className={styles.details_category_subcategory}>Subcategory Name</span>
            </div>
            <div className={styles.details_brand}>
                <span>BrandName</span>
                <img src="https://megamoll.by/upload/iblock/6ea/6eac21b8a46621dd61c8df37403052ff.png" />
            </div>
            <RatingBar enabled={true} height={35} productId={product.id} />
        </div>
    );
};

ProductDetails.defaultProps = {
    addClass: "",
    product: {},
    rating: 0
}

export default ProductDetails