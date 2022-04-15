import React from 'react'

import styles from './styles.module.scss'
import RatingBar from '../../../../components/RatingBar'
import classNames from 'classnames';

const ProductDetails = ({ product, addClass }) => {
    return (
        <div className={classNames(styles.details, addClass)}>
            <h2>{product.name}</h2>
            <div className={styles.details_category}>
                <span className={styles.details_category_name}>Category Name</span>
                <span className={styles.details_category_subcategory}>Subcategory Name</span>
            </div>
            <div className={styles.details_brand}>
                <span>Brand Name</span>
                <img src="https://megamoll.by/upload/iblock/6ea/6eac21b8a46621dd61c8df37403052ff.png" />
            </div>
            <RatingBar rate={4.5} height={35} />
        </div>
    );
};

ProductDetails.defaultProps = {
    addClass: "",
}

export default ProductDetails