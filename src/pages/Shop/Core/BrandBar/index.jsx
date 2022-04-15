import React, { useContext, useState } from 'react'
import classNames from 'classnames'

import Button from '../../../../components/UI/buttons/Button'
import { Context } from '../../../..'
import styles from './styles.module.scss'

const BrandBar = () => {
    const { product } = useContext(Context)
    const [isActive, setIsActive] = new useState(product.selectedBrand);

    return (
        <div className={styles.list}>
            {
                product.brands.map(brand =>
                    <Button
                        click={() => {
                            product.setSelectedBrand(brand)
                            setIsActive(brand)
                        }}
                        key={brand.id}
                        addclass={classNames(styles.list__button, isActive.id === brand.id && styles.active)} >
                        {
                            brand.name
                        }
                    </Button>
                )
            }
        </div>
    );
};

export default BrandBar
