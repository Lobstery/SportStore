import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

const Card = ({ className, children, color, width, props }) => {

    const classes = {
        none: "",
        orange: styles.orange,
        green: styles.green,
        blue: styles.blue,
    }

    return (
        <div className={classNames(styles.default, classes[color], className)} style={{ width: width }}  {...props}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    color: 'none',
    width: 200,
    className: '',
}

export default Card
