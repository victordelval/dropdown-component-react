import React from 'react';
import PropTypes from 'prop-types';


import './Dropdown.css'

/**
 * Multiple search selection dropdown
 */
class Dropdown extends React.Component {

    render() {
        return <select className="dropdown">
            <option>Select a country</option>
            <option value="PT">Portugal</option>
            <option value="SP">Spain</option>
        </select>
    }

}

export default Dropdown;