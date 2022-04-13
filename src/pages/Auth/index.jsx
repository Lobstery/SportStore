import React from 'react'
import { useLocation } from 'react-router-dom'

import styles from './styles.module.scss'
import Container from '../../components/UI/Container';
import Card from '../../components/Card'
import FormAuth from '../../components/FormAuth'
import { LOGIN_ROUTE } from '../../utils/consts'
import { findByLabelText } from '@testing-library/react';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname == LOGIN_ROUTE

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
                <FormAuth />
            </Card>
        </Container >
    )
}

export default Auth
