import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { BRAND_ROUTE, CONTACTS_ROUTE, HOME_ROUTE, SHOP_ROUTE } from '../../../../utils/consts'
import styles from './styles.module.scss'

const LeftNav = ({ className }) => {
    return (
        <nav className={classNames(styles.leftnav, className)}>
            <NavLink className={styles.leftnav__link} to={HOME_ROUTE}>Home</NavLink>
            <NavLink className={styles.leftnav__link} to={CONTACTS_ROUTE}>Contacts</NavLink>
            <NavLink className={styles.leftnav__link} to={SHOP_ROUTE}>Shop</NavLink>
            <NavLink className={styles.leftnav__link} to={BRAND_ROUTE}>Brands</NavLink>
        </nav>
    )
}

LeftNav.defaultProps = {
    className: ""
}

export default LeftNav
