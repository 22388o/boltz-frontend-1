import React from 'react';
import React from 'React';
import ReactDOM from 'react-dom';
import App from '../src/views/index.js';
import './index.css';
import * as serviceWorker from './serviceWorker';
import '../asset/boltz_logo.png'
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
