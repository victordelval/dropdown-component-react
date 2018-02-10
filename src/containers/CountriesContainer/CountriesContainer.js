import React from 'react';

import './CountriesContainer.css'
import Dropdown from '../../components/Dropdown';
import MultiSearchDropdown from '../MultiSearchDropdown';


/**
 * Container component to manage a couple of dropdown selectors.
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

        console.log("CountriesContainer >>> this.props.data")
        console.log(this.props.data)

        return <main className="countries-container">
            <h1 className="countries-container-text">Dropdown component</h1>
            <hr/>
            <p className="countries-container-text countries-container-p">This is a Multiple Search Selection Dropdown component (extends):</p>
            <MultiSearchDropdown
                data={ this.props.countries }
                loading={ this.props.loading }
                dropdownCss={ dropdownClassName } />

            {/* <p className="countries-container-text">Basic Dropdown component:</p>
            <Dropdown
                data={ this.state.countries }
                loading={ this.state.loading }
                dropdownCss={ dropdownClassName } />
            <br/> */}
        </main>;
    }
}

export default CountriesContainer;