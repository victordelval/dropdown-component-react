import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import { Provider } from 'react-redux';

import './index.css';

import MultiSearchDropdown from './containers/MultiSearchDropdown';
// import CountriesContainer from './containers/CountriesContainer';

require('dotenv').config()

ReactDOM.render(
    <Provider store={ store } >
        <main className="countries-container">
            <h1 className="countries-container-text">Dropdown component</h1>
            <hr/>
            <p className="countries-container-text countries-container-p">This is a Multiple Search Selection Dropdown component:</p>
            <MultiSearchDropdown
                url={ process.env.REACT_APP_REQUEST_URL }
                responseKey={ process.env.REACT_APP_RESPONSE_KEY }/>
        </main>
    </Provider>,
    document.getElementById('root')
);
