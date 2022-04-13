import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

const Card = ({ children, color, width, props }) => {

    const classes = {
        none: "",
        orange: styles.orange,
        green: styles.green,
        blue: styles.blue,
    }

    return (
        <div className={classNames(styles.default, classes[color])} style={{ width: width }}  {...props}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    color: 'none',
    width: 200,
}

export default Card
