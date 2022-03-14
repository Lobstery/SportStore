import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.css'

const Button = ({ click, children, color, ...props }) => {

    const btnClasses = {
        orange: styles.myButtonOrange,
        green: styles.myButtonGreen,
        blue: styles.myButtonBlue,
    }

    return (
        <button className={classNames(styles.myButton, btnClasses[color])}  {...props} onClick={click}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    color: 'blue'
}

export default Button
