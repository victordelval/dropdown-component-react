import React from 'react';
import PropTypes from 'prop-types';


class ListItem extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired,
        selected: PropTypes.arrayOf(PropTypes.object).isRequired,
        selectedItem: PropTypes.bool.isRequired,
        search: PropTypes.string,
    }

    // DISABLED
    // _boldSearchString(str, find){
    //     // TODO - case insensitive
    //     let parts = str.split(find);
    //     return <span>
    //         { parts[0] }<b>{ find }</b>{ parts[1] }
    //     </span>;
    // }

    render() {
        let name = this.props.item.name;
        let code = this.props.item.code;
        // let search = this.props.search;
        return (
            <li key={ code }
                onClick={ this.props.onClick }
                className={ this.props.selectedItem ? 'selected-item' : 'item' }
                // data-name={ name }
                data-code={ code } >
                    {/* { search !== '' ? this._boldSearchString(name, search) : name } */}
                    { name }
            </li>
        );
    }

}

export default ListItem;