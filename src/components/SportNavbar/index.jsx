import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { SHOP_ROUTE, HOME_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE } from '../../utils/consts';
import styles from './styles.module.scss'
import Logo from '../Logo'
import Container from '../UI/Container';
import Rightnav from './Core/RightNav';

const SoprtNavbar = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__top}>
                    <nav className={classNames(styles.header__top_left, styles.leftnav)}>
                        <NavLink className={styles.leftnav__link} to={HOME_ROUTE}>Home</NavLink>
                        <NavLink className={styles.leftnav__link} to={CONTACTS_ROUTE}>Contacts</NavLink>
                        <NavLink className={styles.leftnav__link} to={SHOP_ROUTE}>Shop</NavLink>
                        <NavLink className={styles.leftnav__link} to={LOGIN_ROUTE}>Auth</NavLink>
                    </nav>
                    <div className={styles.header__logo}>
                        <div className={styles.header__logo_decoration}></div>
                        <Logo></Logo>
                    </div>
                    <Rightnav classname={styles.header__top_right}></Rightnav>
                </div>
            </Container>
        </header >
    );
}

export default SoprtNavbar;
