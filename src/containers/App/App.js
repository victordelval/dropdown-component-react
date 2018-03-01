import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

import Dropdown from '../../components/Dropdown';
import MultiSearchDropdown from '../MultiSearchDropdown';


class App extends React.Component {

    static propTypes = {
        url: PropTypes.string.isRequired,
        responseKey: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            errorStatus: ''
        };
    }

    async componentDidMount() {
        this.setState({ loading: true });
        try {
            const response = await fetch(this.props.url)
            response.json().then(json => {
                this.setState({
                    loading: false,
                    data: json[this.props.responseKey]
                })
            });
        } catch(err) {
            console.log(err);
            this.setState({
                loading: false,
                errorStatus: 'Error fetching the data from server'
            });
        }
    }

    render() {
        return (
            <main className = "App">
                <h1 className = "App-header"> Dropdown components <br/> ¯\_(ツ)_/¯ </h1>

                <p className = "App-title"> A simple Dropdown </p>
                <div className = "row">
                    <div className = "four columns"> &nbsp; </div>
                    <div className = "four columns">
                        <Dropdown
                            data={ this.state.data }
                            loading={ this.state.loading }
                            dropdownCss='countries-dropdown' />
                    </div>
                    <div className = "four columns"></div>
                </div>

                <hr/>

                <p className = "App-title"> A searchable and multiple selection Dropdown </p>
                <div className = "row">
                    <div className = "four columns"> &nbsp; </div>
                    <div className = "four columns">
                        <MultiSearchDropdown
                            data={ this.state.data }
                            loading={ this.state.loading } />
                    </div>
                    <div className = "four columns"></div>
                </div>
            </main>
        );
    }

}

export default App;