import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './containers/App';

require('dotenv').config()


ReactDOM.render(
    <App
        url={ process.env.REACT_APP_REQUEST_URL }
        responseKey={ process.env.REACT_APP_RESPONSE_KEY } />,
    document.getElementById('root')
);
