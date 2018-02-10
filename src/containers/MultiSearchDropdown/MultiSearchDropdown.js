import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { expandDropdown, collapseDropdown, startSearch, successSearch } from '../../actions/actions';

import './MultiSearchDropdown.css';

import Dropdown from '../../components/Dropdown/';
import SelectorBox from '../../components/SelectorBox';
import SelectorList from '../../components/SelectorList';


/**
 * Multiple search selection dropdown component
 */
// class MultiSearchDropdown extends Dropdown {
class MultiSearchDropdown extends React.Component {

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        expanded: PropTypes.bool.isRequired,
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        selected: PropTypes.arrayOf(PropTypes.object).isRequired,
        search: PropTypes.string,
        queried: PropTypes.bool,
        dropdownCss: PropTypes.string
    }

    constructor(props) {
        super(props);

        // Binds
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if (!this.props.expanded) {
            this.props.dispatch(expandDropdown());
        } else {
            this.props.dispatch(collapseDropdown());
        }
    }

    renderSelector() {
        const selectClassName = 'countries-dropdown multi-search-dropdown';
        return <div>
            <SelectorBox
                onClick={ this.onClick }
                expanded={ this.props.expanded }
                change={ this.props.change }
                dropdownCss={ selectClassName } />
            <SelectorList
                data={ this.props.data }
                loading={ this.props.loading }
                expanded={ this.props.expanded }
                change={ this.props.change }
                dropdownCss={ selectClassName } />
        </div>;
    }

    render() {
        return <div>
            { this.renderSelector() }
        </div>;
    }

}

const mapStateToProps = state => {
    let { loading, expanded, data, selected, search, queried, dropdownCss } = state;
    return { loading, expanded, data, selected, search, queried, dropdownCss };
}

export default connect(mapStateToProps)(MultiSearchDropdown);