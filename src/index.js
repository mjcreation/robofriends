import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import  'tachyons';
import App from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />
    , document.getElementById('root'));
registerServiceWorker();
