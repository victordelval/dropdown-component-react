import React from 'react';
import PropTypes from 'prop-types'

import './SelectorSearch.css';


class SelectorSearch extends React.Component {

    static propTypes = {
        onChange: PropTypes.func.isRequired
    }

    render() {
        return (
            <span>
                <input
                    type="text"
                    onChange={ this.props.onChange }
                    className="selector-search"
                    placeholder="Type to filter..." />
            </span>
        );
    }
}

export default SelectorSearch;