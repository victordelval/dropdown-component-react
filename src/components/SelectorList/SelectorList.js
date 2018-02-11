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
        onClick: PropTypes.func.isRequired,
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        selected: PropTypes.arrayOf(PropTypes.object).isRequired,
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
                console.log(">>>> this.props.selected")
                console.log(this.props.selected)
                return <ul className={ listClassName }>
                    { this.props.data.map(item =>
                        // console.log(item.name);
                        // console.log(this._containsObject(item, this.props.selected));
                        <SelectorItem
                            onClick={ this.props.onClick }
                            item={ item }
                            selected={ this._containsObject(item, this.props.selected) } />
                    )}
                </ul>;
            }

        } else {
            return null;
        }
    }

    _containsObject(obj, list) {
        console.log(">>> _containsObj")
        console.log(obj)
        console.log(list)
        var i;
        for (i = 0; i < list.length; i++) {
            if (this._isEquivalent(list[i], obj)) {
            // if (list[i] === obj) {
                console.log(">>> true")
                return true;
            }
        }
        console.log(">>> false")
        return false;
    }

    _isEquivalent(a, b) {
        // Create arrays of property names
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);

        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }

        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];

            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }

    render() {
        return <span>
            { this.renderList() }
        </span>;
    }

}

export default SelectorList;