import Admin from '../pages/Admin'
import Auth from '../pages/Auth'
import Basket from '../pages/Basket'
import Shop from '../pages/Shop'
import ProductPage from '../pages/ProductPage'
import Home from '../pages/Home'
import { ADMIN_ROUTE, BASKET_ROUTE, BRAND_ROUTE, CONTACTS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, USER_ROUTE } from '../utils/consts'
import UserInfo from '../pages/UserInfo'
import Contacts from '../pages/Contacts'
import Brand from '../pages/Brand'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin />,
    },
    {
        path: BASKET_ROUTE,
        element: <Basket />,
    },
    {
        path: USER_ROUTE,
        element: <UserInfo />,
    },
]
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <Auth />,
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth />,
    },
    {
        path: SHOP_ROUTE,
        element: <Shop />,
    },
    {
        path: HOME_ROUTE,
        element: <Home />,
    },
    {
        path: BRAND_ROUTE,
        element: <Brand />,
    },
    {
        path: CONTACTS_ROUTE,
        element: <Contacts />,
    },
    {
        path: PRODUCT_ROUTE + "/:id",
        element: <ProductPage />,
    }
]