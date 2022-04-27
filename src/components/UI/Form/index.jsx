import React from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

const Form = ({ className, children, color, props }) => {

    const classes = {
        none: "",
        orange: styles.orange,
        green: styles.green,
        blue: styles.blue,
    }

    return (
        <form className={classNames(styles.form, classes[color], className)}  {...props}>
            {children}
        </form>
    )
}

Form.defaultProps = {
    color: 'none',
    className: '',
}

export default Form
