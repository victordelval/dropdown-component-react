import React from 'react';
import Dropdown from '../Dropdown/';

import './MultiSearchDropdown.css';

import SelectorBox from '../SelectorBox';
import SelectorList from '../SelectorList';


/**
 * Multiple search selection dropdown component
 */
class MultiSearchDropdown extends Dropdown {

    constructor(props) {
        super(props);

        // Binds
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            expanded: false,
            search: '',
            selected: []
        }
    }

    onClick(e) {
        console.log(">>>> on click")
        console.log(e.target)

    }

    onChange(e) {
        console.log(">>>> on change")
        console.log(e.target.value)
    }

    renderSelector() {
        let selectClassName = `multi-search-dropdown ${ this.props.dropdownCss }`;
        // return <div
        //     className={ selectClassName }
        //     placeholder="spain, portugal..."
        //     onClick={ this.onClick }
        //     onChange={ this.onChange } >
        //         { this.props.data.map(country =>
        //             <small><span className="button">{ country.name }</span></small>
        //         )}
        // </div>;

        return <div>
            <SelectorBox dropdownCss={ selectClassName } />
            <SelectorList dropdownCss={ selectClassName } />
        </div>;
    }

    render() {
        return <div>
            { this.renderSelector() }
        </div>;
    }

}

export default MultiSearchDropdown;