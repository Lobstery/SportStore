import React, { useContext } from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'
import { Context } from '..';
import { publicRoutes, authRoutes } from '../router/routes';
import { HOME_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const { user } = useContext(Context)
    console.log(user);
    return (
        <Routes>
            {user.AppRouterisAuth && authRoutes.map(({ path, element }) =>
                <Route key={path} element={element} path={path} exact />
            )}
            {publicRoutes.map(({ path, element }) =>
                <Route key={path} element={element} path={path} exact />
            )}
            <Route path='/*' element={<Navigate replace to={HOME_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter