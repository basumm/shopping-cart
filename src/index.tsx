// src/index.tsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import CommonLayout from './components/Layout/Layout';
import { LayoutStyles } from './components/Layout/styles';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <LayoutStyles>
        <CommonLayout>
          <App />
        </CommonLayout>
      </LayoutStyles>
    </BrowserRouter>
  </Provider>
);
