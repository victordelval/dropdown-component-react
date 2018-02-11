import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { expandDropdown, collapseDropdown } from '../../actions/actions';
import { startRequest, successRequest } from '../../actions/actions';
import { addLabel } from '../../actions/actions';

import './MultiSearchDropdown.css';

import Dropdown from '../../components/Dropdown/';
import SelectorBox from '../../components/SelectorBox';
import SelectorList from '../../components/SelectorList';


/**
 * Multiple search selection dropdown container component
 */
export class MultiSearchDropdown extends React.Component {

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        expanded: PropTypes.bool.isRequired,
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        selected: PropTypes.arrayOf(PropTypes.object).isRequired,
        search: PropTypes.string,
        queried: PropTypes.bool,
        dropdownCss: PropTypes.string,

        url: PropTypes.string.isRequired,
        responseKey: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.onClickBox = this.onClickBox.bind(this);
        this.onClickList = this.onClickList.bind(this);
    }

    componentDidMount() {

        this.props.dispatch(startRequest());

        fetch(this.props.url)
            .then(res => {
                return res.json();
            }).then(json => {
                this.props.dispatch(successRequest(json[this.props.responseKey]));
            }).catch(err => {
                // TODO - Handle error
                console.log(err);
            });
    }

    onClickBox(e) {
        if (!this.props.expanded) {
            this.props.dispatch(expandDropdown());
        } else {
            this.props.dispatch(collapseDropdown());
        }
    }

    onClickList(e) {
        let item = e.target;

        if (item.className === 'disabled-item')
            return;

        item.className = 'disabled-item';

        let selectedItem = {
            code: item.getAttribute('data-code'),
            name: item.textContent
        }
        this.props.dispatch(addLabel(selectedItem));
    }

    renderSelector() {
        const selectClassName = 'countries-dropdown multi-search-dropdown';
        return <div>
            <SelectorBox
                onClick={ this.onClickBox }
                expanded={ this.props.expanded }
                selected={ this.props.selected }
                dropdownCss={ selectClassName } />
            <SelectorList
                onClick={ this.onClickList }
                data={ this.props.data }
                loading={ this.props.loading }
                expanded={ this.props.expanded }
                dropdownCss={ selectClassName } />
        </div>;
    }

    render() {
        return <div>
            { this.renderSelector() }
        </div>;
    }

}

const mapStateToProps = state => {
    let { loading, expanded, data, selected, search, queried, dropdownCss } = state;
    return { loading, expanded, data, selected, search, queried, dropdownCss };
}

export default connect(mapStateToProps)(MultiSearchDropdown);