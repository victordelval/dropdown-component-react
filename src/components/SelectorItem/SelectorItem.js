import React from 'react';
import PropTypes from 'prop-types';


class SelectorItem extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired,
        selected: PropTypes.bool.isRequired,
        search: PropTypes.string,
    }

    _boldSearchString(str, find){
        // TODO - case insensitive
        let parts = str.split(find);
        return <span>
            { parts[0] }<b>{ find }</b>{ parts[1] }
        </span>;
    }

    render() {
        let name = this.props.item.name;
        let search = this.props.search;
        return <li key={ this.props.item.code }
                   onClick={ this.props.onClick }
                   className={ this.props.selected ? 'selected-item' : 'item' }
                   data-code={ this.props.item.code } >
            { search !== '' ? this._boldSearchString(name, search) : name }
        </li>;
    }

}

export default SelectorItem;