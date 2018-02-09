import React from 'react';

import SelectorSearch from '../SelectorSearch';
import SelectorLabelList from '../SelectorLabelList';


class SelectorBox extends React.Component {

    render() {
        return <span className={ this.props.dropdownCss }>
            <SelectorSearch />
            <SelectorLabelList />
        </span>;
    }
}

export default SelectorBox;