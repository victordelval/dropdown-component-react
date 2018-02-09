import React from 'react';

// import SelectorListItem from '../SelectorListItem';


class SelectorList extends React.Component {

    render() {
        return <div className={ this.props.dropdownCss }>
            <ul>
                <li>Country 1</li>
                <li>Country 2</li>
            </ul>
        </div>;
    }

}

export default SelectorList;