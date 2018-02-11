import React from 'react';
import PropTypes from 'prop-types';

import './SelectorList.css';
import SelectorItem from '../SelectorItem';


/**
 * First level subcomponent of a MultiSearchDropdown.
 *
 * This subcomponent is a list of available options to select.
 */
class SelectorList extends React.Component {

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        loading: PropTypes.bool.isRequired,
        expanded: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired,
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
                return <ul className={ listClassName }>
                    { this.props.data.map(item =>
                        <SelectorItem
                            onClick={ this.props.onClick }
                            item={ item } />
                    )}
                </ul>;
            }

        } else {
            return null;
        }
    }

    render() {
        return <span>
            { this.renderList() }
        </span>;
    }

}

export default SelectorList;