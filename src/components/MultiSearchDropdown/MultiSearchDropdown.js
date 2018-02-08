import React from 'react';
import Dropdown from '../Dropdown/';

import './MultiSearchDropdown.css'


/**
 * Multiple search selection dropdown component
 */
class MultiSearchDropdown extends Dropdown {

    render() {
        let selectClassName = `dropdown ${ this.props.dropdownCss }`;
        return <div>
            <input type="text" className={ selectClassName } />
        </div>
    }

}

export default MultiSearchDropdown;