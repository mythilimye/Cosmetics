import React, { Component } from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import Error from './error';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Lifecycle from './Lifecycle';
import RegisterForm from './form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    < RegisterForm/>
    <App  />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
