import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { SHOP_ROUTE, HOME_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE } from '../../utils/consts';
import styles from './styles.module.scss'
import Logo from './Core/Logo'
import Container from '../Container';
import Rightnav from './Core/RightNav';
import LeftNav from './Core/LeftNav';

const SoprtNavbar = ({ isAuth, setIsAuth }) => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__top}>
                    <LeftNav className={styles.header__top_left} />
                    <div className={styles.header__logo}>
                        <div className={styles.header__logo_decoration}></div>
                        <Logo></Logo>
                    </div>
                    <Rightnav isAuth={isAuth} setIsAuth={setIsAuth} classname={styles.header__top_right}></Rightnav>
                </div>
            </Container>
        </header >
    );
}

export default SoprtNavbar;
