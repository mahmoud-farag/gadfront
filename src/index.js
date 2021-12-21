import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store} from './store';
import './index.css';
// const store= Store();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
);

