import React, { useContext, useState } from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'

import { Context } from '../..';
import Auth from '../../pages/Auth';
import { publicRoutes, authRoutes } from '../../router/routes';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';

const AppRouter = ({ isAuth, setIsAuth }) => {
    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, element }) =>
                <Route key={path} element={element} path={path} exact />
            )}
            {publicRoutes.map(({ path, element }) =>
                <Route
                    key={path} setIsAuth={
                        path === LOGIN_ROUTE || path === REGISTRATION_ROUTE && setIsAuth}
                    element={path === LOGIN_ROUTE || path === REGISTRATION_ROUTE ?
                        <Auth
                            setIsAuth={setIsAuth} />
                        : element}
                    path={path} exact />
            )}
            <Route path='/*' element={<Navigate replace to={HOME_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter
