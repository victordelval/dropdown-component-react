import React from 'react';
import PropTypes from 'prop-types'

import './SelectorSearch.css';


class SelectorSearch extends React.Component {

    // static propTypes = {
    //     onChange: PropTypes.func.isRequired
    // }

    onChangeSearch(e) {
        let input = e.target.value;
        if (input === '') {

        }
        else {

        }
    }

    render() {
        return <span>
            <input
                type="text"
                onChange={ this.onChange }
                className="selector-search"
                placeholder="Type to filter..." />
        </span>;
    }
}

export default SelectorSearch;