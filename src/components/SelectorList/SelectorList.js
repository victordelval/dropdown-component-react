import React from 'react';

import './SelectorList.css'
// import SelectorListItem from '../SelectorListItem';


class SelectorList extends React.Component {

    render() {
        return <div className={ this.props.dropdownCss }>
            <ul className="selector-list">
                { this.props.data.map(country =>
                    <li>{ country.name }</li>
                )}
            </ul>
        </div>;
    }

}

export default SelectorList;