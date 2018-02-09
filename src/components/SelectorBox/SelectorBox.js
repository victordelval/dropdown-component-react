import React from 'react';

import SelectorSearch from '../SelectorSearch';
import SelectorLabel from '../SelectorLabel';


class SelectorBox extends React.Component {

    render() {
        return <span className={ this.props.dropdownCss }>
            <SelectorSearch />
            <SelectorLabel />
        </span>;
    }
}

export default SelectorBox;