import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar';
import MyButton from '../components/UI/buttons/MyButton';
import Container from '../components/UI/container/Container';
import MyInput from '../components/UI/inputs/MyInput';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <div className='wrapper'>
            <NavBar></NavBar>
            <main className='main'>
                <Container>
                    <div className='auth__body'>
                        <p className='auth__title title'>{isLogin ? "Log in" : "Sign up"}</p>
                        <form>
                            <MyInput placeholder="Email"></MyInput>
                            <MyInput placeholder="Password"></MyInput>
                            <div className='auth__bottom'>
                                {isLogin ?
                                    <div className='auth__register'>
                                        Do not have an account? <Link className='auth__register-link' to={REGISTRATION_ROUTE}>Register</Link>
                                    </div>
                                    : <span></span>
                                }
                                <MyButton style={{ padding: "10px 30px" }} type="submit" color="orange">Ok</MyButton>
                            </div>
                        </form>
                    </div>
                </Container >
            </main >
        </div >
    );
};

export default Auth;