import React, { useContext, useState } from 'react'
import classNames from 'classnames'

import Button from '../../../../components/UI/buttons/Button'
import { Context } from '../../../..'
import styles from './styles.module.scss'

const BrandBar = ({ setActivePage, brands, isActive, setIsActive }) => {
    const { product } = useContext(Context)

    return (
        <div className={styles.list}>
            {
                brands.map(brand =>
                    <Button
                        click={() => {
                            if (product.selectedBrand.id != brand.id) {
                                product.setSelectedBrand(brand)
                                setIsActive(brand)
                                setActivePage(1)
                            }
                            else {
                                product.setSelectedBrand({})
                                setIsActive({})
                                setActivePage(1)
                            }
                        }}
                        key={brand.id}
                        className={classNames(styles.list__button, isActive.id === brand.id && styles.active)} >
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
