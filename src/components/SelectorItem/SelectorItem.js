import React from 'react';
import PropTypes from 'prop-types';


class SelectorItem extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired,
        selected: PropTypes.arrayOf(PropTypes.object).isRequired,
        selectedItem: PropTypes.bool.isRequired,
        search: PropTypes.string,
    }

    // onClick = (e) => {
    //     let item = e.target;

    //     if (item.className === 'selected-item')
    //         return;

    //     item.className = 'selected-item';

    //     let selectedItem = {
    //         code: item.getAttribute('data-code'),
    //         name: item.textContent
    //     }
    //     // add label
    //     let selectedArr = this.props.selected.slice(0);
    //     selectedArr.push(selectedItem);

    //     // this.setState({ selected: selectedArr })
    //     this.props.selected = selectedArr;

    //     console.log(this.props)
    // }

    _boldSearchString(str, find){
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
                   className={ this.props.selectedItem ? 'selected-item' : 'item' }
                   data-code={ this.props.item.code } >
            { search !== '' ? this._boldSearchString(name, search) : name }
        </li>;
    }

}

export default SelectorItem;