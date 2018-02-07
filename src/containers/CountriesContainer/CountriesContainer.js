import React from 'react';

import Dropdown from '../../components/Dropdown';


/**
 * Container component to select multiple countries.
 */
class CountriesContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            countries: []
        }
    }

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