import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname == LOGIN_ROUTE

    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ height: window.innerHeight - 55 }}>
            <Card style={{ width: 600 }} className="p-5">
                <h2 className='m-auto'>{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className='d-flex flex-column mt-3'>
                    <Form.Control className='mt-3' placeholder='Email...'></Form.Control>
                    <Form.Control className='mt-3' placeholder='Password...'></Form.Control>
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        {isLogin ?
                            <div>
                                Don't have an account? <NavLink to={REGISTRATION_ROUTE} style={{ textDecoration: "none" }} className="text-success">Register</NavLink>
                            </div>
                            :
                            <div>
                                Have an account? <NavLink to={LOGIN_ROUTE} style={{ textDecoration: "none" }} className="text-success">Login</NavLink>
                            </div>
                        }
                        <Button variant={"outline-warning"} className="ps-4 pe-4">{isLogin ? "Authorization" : "Register"}</Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
