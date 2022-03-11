import classNames from 'classnames'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../..'
import cl from './NavBar.module.css'
import MyLogo from '../logo/MyLogo';
import { ADMIN_ROUTE, BASKET_ROUTE, CONTACTS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, USER_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite';
import Container from '../UI/container/Container';

const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (
        <header>
            <nav className={cl.navBar}>
                <div className={cl.navBarTop}>
                    <Container>
                        <div className={cl.navBarTopBody}>
                            <div className={cl.navBarTopLeft}>
                                <Link className={cl.navBarTopLink} to={HOME_ROUTE}>Home</Link>
                                <Link className={cl.navBarTopLink} to={SHOP_ROUTE}>Store</Link>
                                <Link className={cl.navBarTopLink} to={HOME_ROUTE}>About</Link>
                                <Link className={cl.navBarTopLink} to={CONTACTS_ROUTE}>Contacts</Link>
                            </div>
                            <div className={cl.navBarLogo}>
                                <Link className={cl.navBarLinkLogo} to={HOME_ROUTE}><MyLogo></MyLogo></Link>
                            </div>
                            <div className={cl.navBarTopRigth}>
                                <div className={cl.navBarCalendar}>
                                    <p><b>Lu-Vi:</b> 8:00 - 20:00</p>
                                    <p><b>Sa-Du:</b> 9:00 - 18:00</p>
                                </div>
                                {user.isAuth &&
                                    <Link to={BASKET_ROUTE}>
                                        <div className={cl.navBarBasket}>
                                            <div className={cl.navBarBasketCount}>4</div>
                                        </div>
                                    </Link>}
                            </div>
                        </div>
                    </Container>
                </div>
                <div className={cl.navBarBottom}>
                    <Container>
                        <div className={cl.navBarBottomBody}>
                            {user.isAuth ?
                                <div className={cl.navBarBottomLeft}>

                                    <Link className={classNames(cl.navBarBottomLink, cl.bottom1)} onClick={() => user.setIsAuth(false)} to={LOGIN_ROUTE}>Log out</Link>
                                    <Link className={classNames(cl.navBarBottomLink, cl.bottom2)} to={ADMIN_ROUTE}>Admin</Link>
                                </div>
                                :
                                <div className={cl.navBarBottomLeft}>
                                    <Link className={classNames(cl.navBarBottomLink, cl.bottom3)} onClick={() => user.setIsAuth(true)} to={REGISTRATION_ROUTE}>Registration</Link>
                                </div>
                            }

                            <div className={cl.navBarBottomRight}>
                                {user.isAuth &&
                                    <Link className={classNames(cl.navBarBottomLink, cl.bottom4)} to={USER_ROUTE}>User Name</Link>
                                }
                            </div>
                        </div>
                    </Container>
                </div>
            </nav >
        </header>
    );
});

export default NavBar