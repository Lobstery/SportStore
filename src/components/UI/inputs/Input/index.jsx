import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss'

const Input = ({ props }) => {

    const [isFocus, setIsFocus] = useState();

    return (
        <input
            onBlur={() => { setIsFocus() }}
            onFocus={() => { setIsFocus(styles.focus) }}
            className={classNames(styles.default, isFocus)}
            {...props}
        />
    )
}

export default Input;
