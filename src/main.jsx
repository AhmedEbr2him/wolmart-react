import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MainProviderContext } from './context/MainContext.jsx';
import { ScrollToTop } from './components/index.js';
import { ToastProvider } from './components/Toast/ToastProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
      <MainProviderContext>
        <BrowserRouter>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </BrowserRouter>
      </MainProviderContext>
    </ToastProvider>
  </React.StrictMode>
);
