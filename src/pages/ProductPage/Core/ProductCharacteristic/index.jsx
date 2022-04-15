import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

const ProductCharacteristic = ({ index, info }) => {

    return (
        <div className={classNames(styles.description, index % 2 != 0 && styles.odd)}>
            <span className={styles.description__title}>{info.title}</span>
            <span className={styles.description__description}>{info.description}</span>
        </div>
    )
}

ProductCharacteristic.defaultProps = {
    index: 0
}

export default ProductCharacteristic
