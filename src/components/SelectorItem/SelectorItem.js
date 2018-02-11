import React from 'react';
import PropTypes from 'prop-types';


class SelectorItem extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    }

    render() {
        return <li key={ this.props.item.code }
            onClick={ this.props.onClick }
            className='item'
            data-code={ this.props.item.code }
        >{ this.props.item.name }</li>;
    }

}

export default SelectorItem;