import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { UserProvider } from './store/UserStore';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Main />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
