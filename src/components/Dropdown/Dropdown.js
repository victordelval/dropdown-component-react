import React from 'react';
import PropTypes from 'prop-types';

import './Dropdown.css'


/**
 * Multiple search selection dropdown component
 */
class Dropdown extends React.Component {

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        loading: PropTypes.bool.isRequired
    }

    render() {
        return <select className="dropdown">
            <option>Select a country</option>
            <option value="PT">Portugal</option>
            <option value="SP">Spain</option>
        </select>
    }

}

export default Dropdown;