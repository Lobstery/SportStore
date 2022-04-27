import React, { useContext } from 'react';

import Button from '../../../../components/UI/buttons/Button'
import styles from './styles.module.scss'
import { Context } from '../../../..'
import ProductItem from '../ProductItem';
import classNames from 'classnames';

const ProductList = ({ products, className }) => {

    return (
        <div className={classNames(styles.list, className)}>
            {
                products.map(prod =>
                    <ProductItem key={prod.id} product={prod} />
                )
            }
        </div>
    );
};

export default ProductList;
