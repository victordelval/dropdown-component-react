import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
// import { Provider } from 'react-redux';

import './index.css';

// import Dropdown from '../../components/Dropdown/';
// import CountriesContainer from './containers/CountriesContainer';
import MultiSearchDropdown from './containers/MultiSearchDropdown';

require('dotenv').config()

ReactDOM.render(
        <main className="countries-container">
            <h1 className="countries-container-text">Dropdown components</h1>
            <hr/>
            <p className="countries-container-text countries-container-p">This is a "Multiple Search Selection" Dropdown component:</p>
            <div className="row">
                <div className="four columns">&nbsp;</div>
                <div className="four columns">
                <MultiSearchDropdown
                    url={ process.env.REACT_APP_REQUEST_URL }
                    responseKey={ process.env.REACT_APP_RESPONSE_KEY }/>
                </div>
                <div className="four columns"></div>
            </div>
        </main>,
    document.getElementById('root')
);
