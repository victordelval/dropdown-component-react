import React from 'react';
import PropTypes from 'prop-types';

import SelectorSearch from '../SelectorSearch';
import SelectorLabelList from '../SelectorLabelList';


/**
 * First level subcomponent of a MultiSearchDropdown.
 *
 * This subcomponent is a composition of a search input (to filter the list
 * subcomponent) and a label list (to show selected items of the list subcomponent)
 */
class SelectorBox extends React.Component {

    static propTypes = {
        // onClickBox: PropTypes.func.isRequired,
        // onClickLabel: PropTypes.func.isRequired,
        // onChangeSearch: PropTypes.func.isRequired,
        selected: PropTypes.arrayOf(PropTypes.object).isRequired,
        expanded: PropTypes.bool.isRequired,
        dropdownCss: PropTypes.string
    }

    constructor(props) {
            super(props);

            this.state = {
                expanded: false
            }
        }

    onClick = (e) => {
        if (e.target.nodeName === 'LABEL') return;
        console.log(this.props)
        if (!this.props.expanded) {
            if (e.target.nodeName === 'INPUT') e.target.focus();
            else e.target.getElementsByTagName('input')[0].focus();
            // this.props.dispatch(expandDropdown());
            this.setState({ expanded: true });
            // this.props.expanded = true;
        }
    }

    render() {
        return <span onClick={ this.onClick } className={ this.props.dropdownCss }>
            <SelectorSearch />
            <SelectorLabelList selected={ this.props.selected } />
        </span>;
    }
}

export default SelectorBox;