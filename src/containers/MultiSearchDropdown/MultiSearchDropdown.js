import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { expandDropdown, collapseDropdown } from '../../actions/actions';
import { startRequest, successRequest } from '../../actions/actions';
import { addLabel, removeLabel } from '../../actions/actions';
import { filterList, resetFilter } from '../../actions/actions';

import './MultiSearchDropdown.css';

// import Dropdown from '../../components/Dropdown/';
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
        filtered: PropTypes.arrayOf(PropTypes.object).isRequired,
        search: PropTypes.string,
        // queried: PropTypes.bool,
        dropdownCss: PropTypes.string,

        url: PropTypes.string.isRequired,
        responseKey: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.onClickBox = this.onClickBox.bind(this);
        this.onClickList = this.onClickList.bind(this);
        this.onClickLabel = this.onClickLabel.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {

        document.addEventListener('mousedown', this.handleClickOutside);

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

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.dispatch(collapseDropdown());
        }
    }

    onClickBox(e) {
        if (e.target.nodeName === 'LABEL') return;

        if (!this.props.expanded) {
            e.target.getElementsByTagName('input')[0].focus();
            this.props.dispatch(expandDropdown());
        }
    }

    onClickList(e) {
        let item = e.target;

        if (item.className === 'selected-item')
            return;

        item.className = 'selected-item';

        let selectedItem = {
            code: item.getAttribute('data-code'),
            name: item.textContent
        }
        this.props.dispatch(addLabel(selectedItem));
    }

    onClickLabel(e) {
        let item = e.target;

        let selectedItem = {
            code: item.getAttribute('data-code'),
            name: item.textContent
        }

        this.props.dispatch(removeLabel(selectedItem));
    }

    onChangeSearch(e) {
        let input = e.target.value;
        if (input === '')
            this.props.dispatch(resetFilter(e.target.value));
        else
            this.props.dispatch(filterList(e.target.value));
    }

    renderSelector() {
        const selectClassName = 'countries-dropdown multi-search-dropdown';
        return <div>
            <SelectorBox
                onClickBox={ this.onClickBox }
                onClickLabel={ this.onClickLabel }
                onChangeSearch={ this.onChangeSearch }
                expanded={ this.props.expanded }
                selected={ this.props.selected }
                dropdownCss={ selectClassName } />
            <SelectorList
                onClick={ this.onClickList }
                data={ this.props.data }
                filtered={ this.props.filtered }
                selected={ this.props.selected }
                search={ this.props.search }
                loading={ this.props.loading }
                expanded={ this.props.expanded }
                dropdownCss={ selectClassName } />
        </div>;
    }

    render() {
        return <div ref={this.setWrapperRef}>
            { this.renderSelector() }
        </div>;
    }

}

const mapStateToProps = state => {
    let { loading, expanded, data, filtered, selected, search, dropdownCss } = state;
    return { loading, expanded, data, filtered, selected, search, dropdownCss };
}

export default connect(mapStateToProps)(MultiSearchDropdown);