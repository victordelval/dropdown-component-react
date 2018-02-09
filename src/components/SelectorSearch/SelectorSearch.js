import React from 'react';

import './SelectorSearch.css';


class SelectorSearch extends React.Component {
    render() {
        return <span>
            <input className="selector-search" type="text" placeholder="Type to filter..." />
        </span>;
    }
}

export default SelectorSearch;