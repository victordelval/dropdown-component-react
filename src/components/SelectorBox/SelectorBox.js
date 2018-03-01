import React from 'react';
import PropTypes from 'prop-types';

import SelectorSearch from '../SelectorSearch';
import SelectorLabelList from '../SelectorLabelList';


class SelectorBox extends React.Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        selected: PropTypes.arrayOf(PropTypes.object).isRequired,
        onClickLabel: PropTypes.func.isRequired,
        onChangeSearch: PropTypes.func.isRequired,
        dropdownCss: PropTypes.string
    }

    render() {
        return (
            <span
                onClick={ this.props.onClick }
                className={ this.props.dropdownCss }>
                <SelectorSearch
                    onChange={ this.props.onChangeSearch } />
                <SelectorLabelList
                    onClickLabel={ this.props.onClickLabel }
                    selected={ this.props.selected } />
            </span>
        );
    }
}

export default SelectorBox;