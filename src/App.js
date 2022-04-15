import { useContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';

import './App.scss';
import AppRouter from './components/AppRouter';
import SportNavbar from './components/SportNavbar';

function App() {
  const { user } = useContext(Context)
  const [isAuth, setIsAuth] = new useState(user.isAuth)

  return (
    <BrowserRouter>
      <SportNavbar isAuth={isAuth} setIsAuth={setIsAuth}></SportNavbar>
      <AppRouter isAuth={isAuth} />
    </BrowserRouter>
  );
}

export default App;
