import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PersonalDetails from './Components/PersonalDetails';
import CompanyDetails from './Components/CompanyDetails';
import EmailVerification from './Components/EmailVerification';
import Routers from './Components/router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
