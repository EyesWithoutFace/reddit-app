import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './App';
import reportWebVitals from './reportWebVitals';

const e = React.createElement

const domContainer = document.querySelector('#Main');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Main));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
