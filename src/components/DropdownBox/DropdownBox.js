import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from '../SearchBox';
import LabelList from '../LabelList';


class DropdownBox extends React.Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        selected: PropTypes.arrayOf(PropTypes.object).isRequired,
        onClickLabel: PropTypes.func.isRequired,
        onChangeSearch: PropTypes.func.isRequired,
        dropdownCss: PropTypes.string
    }

    render() {
        return (
            <span onClick={ this.props.onClick }
                  className={ this.props.dropdownCss }>
                <SearchBox
                    onChange={ this.props.onChangeSearch } />
                <LabelList
                    onClickLabel={ this.props.onClickLabel }
                    selected={ this.props.selected } />
            </span>
        );
    }
}

export default DropdownBox;