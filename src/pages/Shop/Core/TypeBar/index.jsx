import React, { useContext, useState } from 'react'
import classNames from 'classnames'

import Button from '../../../../components/UI/buttons/Button'
import { Context } from '../../../..'
import styles from './styles.module.scss'

const TypeBar = ({ types }) => {
    const { product } = useContext(Context)
    const [isTypesActive, setIsTypesActive] = new useState(true);
    const [activeType, setActiveType] = new useState(product.selectedType);
    const isactive = {
        true: styles.active,
        false: "",
    }

    return (
        <div className={styles.list}>
            <div className={styles.list__header}>
                <p className={styles.list__header_title}>Catalog Produse</p>
                <Button click={() => setIsTypesActive(!isTypesActive)}
                    className={classNames(styles.list__header_button, isactive[isTypesActive])}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </Button>
            </div>
            <div className={classNames(styles.list__typeslist, isactive[isTypesActive])}>
                {
                    types.map(type =>
                        <Button
                            color={type.id == activeType.id ? "orange" : "blue"}
                            click={() => {
                                if (type.id != product.selectedType.id) {
                                    product.setSelectedType(type)
                                    setActiveType(type)
                                }
                                else {
                                    product.setSelectedType({})
                                    setActiveType({})
                                }
                            }}
                            className={styles.list__row}
                            key={type.id}>
                            {type.name}
                        </Button>)
                }
            </div>
        </div>
    )
}

export default TypeBar
