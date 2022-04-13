import React, { useContext, useState } from 'react';
import classNames from 'classnames';

import { Context } from '../../../..';
import styles from './styles.module.scss'
import Button from '../../../UI/buttons/Button';

const RightNav = ({ classname }) => {
    const { user } = useContext(Context)
    const [changeNav, setChangeNav] = useState(user.isAuth);

    return (
        <>
            {changeNav
                ?
                <nav className={classNames(classname, styles.rightnav)} style={{ color: 'white' }}>
                    <Button>
                        Admin Panel
                    </Button>
                    <Button
                        click={() => {
                            user.setIsAuth(false);
                            setChangeNav(user.isAuth)
                        }}>
                        Log out
                    </Button>
                </nav>
                :
                <nav className={classNames(classname, styles.rightnav)}>
                    <Button
                        click={() => {
                            user.setIsAuth(true);
                            setChangeNav(user.isAuth)
                        }}>
                        Authorization
                    </Button>
                </nav>
            }
        </>
    );
};

export default RightNav;