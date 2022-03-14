import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import AppRouter from './components/AppRouter';
import SportNavbar from './components/SportNavbar';

function App() {

  return (
    <BrowserRouter>
      <SportNavbar></SportNavbar>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
