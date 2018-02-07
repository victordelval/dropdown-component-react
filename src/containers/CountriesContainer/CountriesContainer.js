import React from 'react';

import './CountriesContainer.css'
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

    componentDidMount() {
        this.setState({ loading: true });

        fetch('http://127.0.0.1:9000/countries').then(res => {
            return res.json();
        }).then(json => {
            this.setState({
                loading: false,
                countries: json.countries
            })
        }).catch(err => {
            console.log(err)
            this.setState({
                loading: false,
                countries: []
            })
        });
    }

    render() {
        const dropdownClassName = 'countries-dropdown';

        return (
            <main className="countries-container">
                <h1 className="countries-container-text">This is a dropdown component</h1>
                <p className="countries-container-text">Please select a country:</p>
                    <Dropdown
                        data={ this.state.countries }
                        loading={ this.state.loading }
                        dropdownCss={ dropdownClassName } />
            </main>
        )
    }

}

export default CountriesContainer;