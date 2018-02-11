import React from 'react';
import PropTypes from 'prop-types';


class SelectorItem extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired,
        selected: PropTypes.bool.isRequired
    }

    render() {
        return <li key={ this.props.item.code }
            onClick={ this.props.onClick }
            className={ this.props.selected ? 'selected-item' : 'item' }
            data-code={ this.props.item.code }
        >{ this.props.item.name }</li>;
    }

}

export default SelectorItem;