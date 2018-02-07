import React from 'react';

import Dropdown from '../../components/Dropdown';


class CountriesContainer extends React.Component {

    render() {
        return (
            <main className="container">
                <h1>This is a dropdown component</h1>
                <Dropdown />
            </main>
        )
    }

}

export default CountriesContainer;