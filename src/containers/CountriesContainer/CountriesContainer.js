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

        fetch(process.env.REACT_APP_COUNTRIES_URL).then(res => {
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