import React, { useContext } from 'react';

import Button from '../../../../components/UI/buttons/Button'
import styles from './styles.module.scss'
import { Context } from '../../../..'
import ProductItem from '../ProductItem';

const ProductList = () => {
    const { product } = useContext(Context)

    return (
        <div className={styles.list}>
            {
                product.products.map(prod =>
                    <ProductItem key={prod.id} product={prod} />
                )
            }
        </div>
    );
};

export default ProductList;
