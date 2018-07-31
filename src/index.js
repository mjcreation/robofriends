import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloC1 from './Hello.js';
import  'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloC1 greeting={'Hello' + ' React Ninja'} />, document.getElementById('root'));
registerServiceWorker();
