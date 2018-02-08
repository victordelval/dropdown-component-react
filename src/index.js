import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import CountriesContainer from './containers/CountriesContainer';

require('dotenv').config()

ReactDOM.render(
    <div>
        <CountriesContainer />
    </div>,
    document.getElementById('root')
);
