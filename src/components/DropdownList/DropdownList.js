import React from 'react';
import PropTypes from 'prop-types';

import { _containsObject } from '../../utils'

import './DropdownList.css';
import ListItem from '../ListItem';


class DropdownList extends React.Component {

    static propTypes = {
        onClickItem: PropTypes.func.isRequired,
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        filtered: PropTypes.arrayOf(PropTypes.object).isRequired,
        selected: PropTypes.arrayOf(PropTypes.object).isRequired,
        search: PropTypes.string,
        loading: PropTypes.bool.isRequired,
        expanded: PropTypes.bool.isRequired,
        dropdownCss: PropTypes.string
    }

    renderList() {

        if (this.props.expanded) {
            let listClassName = `selector-list ${ this.props.dropdownCss }`;

            if (this.props.loading) {
                return <p className={ listClassName }>Loading...</p>;

            } else if (this.props.data.length === 0) {
                return <span className={ listClassName }>No data available</span>;

            } else {
                let dataDisplay;

                if (this.props.search !== '')
                    dataDisplay = this.props.filtered;
                else
                    dataDisplay = this.props.data;

                if (dataDisplay.length === 0)
                    return <span className={ listClassName }>No match found</span>;

                return (
                    <ul className={ listClassName }>
                        { dataDisplay.map(item =>
                            <ListItem
                                key={ item.name }
                                onClick={ this.props.onClickItem }
                                item={ item }
                                search={ this.props.search }
                                selected={ this.props.selected }
                                selectedItem={ _containsObject('boolean', item, this.props.selected) } />
                        ) }
                    </ul>
                );
            }
        }
    }

    render() {
        return <div>
            { this.renderList() }
        </div>;
    }

}

export default DropdownList;