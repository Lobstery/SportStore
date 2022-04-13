import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Form from '../UI/Form'
import Input from '../UI/inputs/Input'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';

const FormAuth = () => {

    const location = useLocation()
    const isLogin = location.pathname == LOGIN_ROUTE

    return (
        <Form>
            <Input placeholder='Email...'></Input>
            <Input placeholder='Password...'></Input>
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
    )
}

export default FormAuth
