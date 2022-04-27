import { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Context } from '.';
import './App.scss';
import AppRouter from './components/AppRouter';
import SportNavbar from './components/SportNavbar';
import { check } from './http/userAPI';
import Spinner from './components/UI/Spinner';

function App() {
  const { user } = useContext(Context)
  const [isAuth, setIsAuth] = new useState(user.isAuth)
  const [loading, setLoading] = new useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
      setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) return (
    <Spinner />
  )

  return (
    <BrowserRouter>
      <SportNavbar isAuth={isAuth} setIsAuth={setIsAuth}></SportNavbar>
      <AppRouter isAuth={isAuth} setIsAuth={setIsAuth} />
    </BrowserRouter>
  );
}

export default App;
