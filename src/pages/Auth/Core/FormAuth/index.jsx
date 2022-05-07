import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import styles from './styles.module.scss'
import MainButton from '../../../../components/UI/buttons/MainButton'
import Form from '../../../../components/UI/Form'
import Input from '../../../../components/UI/inputs/Input'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../../../utils/consts'

const FormAuth = ({ click, email, setEmail, password, setPassword }) => {
    const location = useLocation()
    const isLogin = location.pathname == LOGIN_ROUTE

    return (
        <Form>
            <Input placeholder='Email...' autoComplete="current-email" value={email} setValue={setEmail} />
            <Input type='password' autoComplete="current-password" placeholder='Password...' value={password} setValue={setPassword} />
            <div className={styles.bottom}>
                {isLogin ?
                    <div>
                        Don't have an account?
                        <NavLink to={REGISTRATION_ROUTE} className={styles.link} children='Register' />
                    </div>
                    :
                    <div>
                        Have an account?
                        <NavLink to={LOGIN_ROUTE} className={styles.link} children='Login' />
                    </div>
                }
                <MainButton click={e => click(e)} color='orange' addclass={styles.button}>{isLogin ? 'Authorization' : 'Register'}</MainButton>
            </div >
        </Form >
    )
}

export default FormAuth
