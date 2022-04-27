import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Container from '../../components/Container';
import Card from '../../components/Card'
import FormAuth from './Core/FormAuth'
import { LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts'
import { login, registration } from '../../http/userAPI';
import { Context } from '../..'

const Auth = ({ setIsAuth }) => {
    const { user } = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname == LOGIN_ROUTE
    const [email, setEmail] = new useState('')
    const [password, setPassword] = new useState('')
    const navigate = useNavigate()

    const click = async (e) => {
        e.preventDefault()
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            }
            else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            setIsAuth(true)
            navigate(SHOP_ROUTE)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 600,
                height: window.innerHeight - 55
            }}>
            <Card width={600}>
                <h2 style={{ textAlign: 'center' }}>{isLogin ? "Authorization" : "Registration"}</h2>
                <FormAuth click={click}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                />
            </Card>
        </Container >
    )
}

export default Auth
