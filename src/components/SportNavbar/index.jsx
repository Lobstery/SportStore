import React, { useContext, useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Button from '../UI/buttons/Button'
import { Context } from '../..';
import { SHOP_ROUTE, HOME_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE } from '../../utils/consts';
import styles from './styles.module.css'

const SoprtNavbar = () => {
    const { user } = useContext(Context)
    const [changeNav, setChangeNav] = useState(user.isAuth);

    return (
        <Navbar bg="success">
            <Container>
                <nav Nav className="me-auto" style={{ color: 'white' }}>
                    <NavLink to={HOME_ROUTE}>Home</NavLink>
                    <NavLink to={CONTACTS_ROUTE}>Contacts</NavLink>
                    <NavLink to={SHOP_ROUTE}>Shop</NavLink>
                    <NavLink to={LOGIN_ROUTE}>Auth</NavLink>
                </nav>
                <NavLink to={SHOP_ROUTE}>Buy product</NavLink>
                {changeNav
                    ?
                    <nav style={{ color: 'white' }}>
                        <Button>Admin Panel</Button>
                        <Button
                            click={() => {
                                user.setIsAuth(false);
                                setChangeNav(user.isAuth)
                            }}>
                            Log out
                        </Button>
                    </nav>
                    :
                    <nav style={{ color: 'white' }}>
                        <Button
                            click={() => {
                                user.setIsAuth(true);
                                setChangeNav(user.isAuth)
                            }}>
                            Authorization
                        </Button>
                    </nav>
                }
            </Container>
        </Navbar >
    );
}

export default SoprtNavbar;
