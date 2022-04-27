import classNames from 'classnames'
import React, { useState } from 'react'

import styles from './styles.module.scss'

const Dropdown = ({ items, title, className, setValue }) => {
    const [isSelected, setIsSelected] = new useState(false)

    return (
        <select
            className={
                classNames(
                    styles.dropdown,
                    className,
                    isSelected && styles.is_selected
                )
            }
            onChange={e => {
                setIsSelected(true)
                setValue(e.target.value)
            }}>
            <option hidden>{title}</option>
            {
                items.map(item =>
                    <option
                        className={styles.dropdown__item}
                        key={item.id}
                        value={item.id}
                        children={item.name}>
                    </option>
                )
            }
        </select>
    )
}

Dropdown.defaultProps = {
    items: [],
    className: '',
}

export default Dropdown
