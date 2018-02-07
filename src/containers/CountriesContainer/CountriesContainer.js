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
        return (
            <main className="container">
                <h1>This is a dropdown component</h1>
                <p>Please select a country:</p>
                <Dropdown
                    data={ this.state.countries }
                    loading={ this.state.loading } />
            </main>
        )
    }

}

export default CountriesContainer;