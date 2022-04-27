import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

const Button = ({ click, children, className, color, props }) => {

    const btnClasses = {
        orange: styles.button_orange,
        green: styles.button_green,
        blue: styles.button_blue,
    }

    return (
        <button className={classNames(styles.button, btnClasses[color], className)}  {...props} onClick={click}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    color: 'blue',
    className: ''
}

export default Button
