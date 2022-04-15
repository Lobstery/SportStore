import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import { Context } from '../../../..'
import styles from './styles.module.scss'
import Button from '../../../UI/buttons/Button'
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../../../../utils/consts'

const RightNav = ({ isAuth, setIsAuth, classname }) => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    return (
        <>
            {isAuth
                ?
                <nav className={classNames(classname, styles.rightnav)} style={{ color: 'white' }}>
                    <Button click={() => navigate(ADMIN_ROUTE)}>
                        Admin Panel
                    </Button>
                    <Button
                        click={() => {
                            user.setIsAuth(false)
                            setIsAuth(user.isAuth)
                            console.log(isAuth)
                            navigate(LOGIN_ROUTE)
                        }}>
                        Log out
                    </Button>
                </nav>
                :
                <nav className={classNames(classname, styles.rightnav)}>
                    <Button
                        click={() => {
                            user.setIsAuth(true)
                            console.log(isAuth)
                            setIsAuth(user.isAuth)
                        }}>
                        Authorization
                    </Button>
                </nav>
            }
        </>
    )
}

export default RightNav
