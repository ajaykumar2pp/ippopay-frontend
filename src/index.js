import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <App /> */}
        <Main />
    </>

);


reportWebVitals();
