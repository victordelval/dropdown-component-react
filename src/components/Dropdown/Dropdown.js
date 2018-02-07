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

    renderSelector() {
        if (this.props.loading) {
            return <select className="dropdown">
                <option>Loading...</option>
            </select>
        } else if (this.props.data.length === 0) {
            return <select className="dropdown" disabled>
                <option>No data available</option>
            </select>
        } else {
            return <select className="dropdown">
                { this.props.data.map(country =>
                    <option value={ country.code } key={ country.code } >{ country.name }</option>
                ) }
            </select>
        }
    }

    render() {
        return <div>
            { this.renderSelector() }
        </div>
    }

}

export default Dropdown;