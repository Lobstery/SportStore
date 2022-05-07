import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

const Input = ({autoComplete, placeholder, type, className, value, setValue, setCharacteristic, props }) => {

    const [isFocus, setIsFocus] = useState()

    return (
        <input
        autoComplete={autoComplete}
            value={value}
            type={type}
            placeholder={placeholder}
            onBlur={() => { setIsFocus() }}
            onFocus={() => { setIsFocus(styles.focus) }}
            className={classNames(styles.default, className, isFocus)}
            onChange={(e) => { setValue != null ? setValue(e.target.value) : setCharacteristic(e) }
            }
            {...props}
        />
    )
}

Input.defaultProps = {
    placeholder: "",
    type: 'text',
    setCharacteristic: null,
    setValue: null,
}

export default Input
