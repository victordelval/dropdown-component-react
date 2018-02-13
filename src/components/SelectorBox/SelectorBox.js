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
        onClick: PropTypes.func.isRequired,
        selected: PropTypes.arrayOf(PropTypes.object).isRequired,
        onClickLabel: PropTypes.func.isRequired,
        onChangeSearch: PropTypes.func.isRequired,
        dropdownCss: PropTypes.string
        // expanded: PropTypes.bool.isRequired,
    }

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         expanded: props.expanded
    //     }
    // }

    render() {
        return <span
            onClick={ this.props.onClick }
            className={ this.props.dropdownCss }>
            <SelectorSearch
                onChange={ this.props.onChangeSearch } />
            <SelectorLabelList
                onClickLabel={ this.props.onClickLabel }
                selected={ this.props.selected } />
        </span>;
    }
}

export default SelectorBox;