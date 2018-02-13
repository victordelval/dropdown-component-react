import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { expandDropdown, collapseDropdown } from '../../actions/actions';
import { startRequest, successRequest } from '../../actions/actions';
import { addLabel, removeLabel } from '../../actions/actions';
import { filterList, resetFilter } from '../../actions/actions';

import { _containsObject, _filterByName } from '../../utils'

import './MultiSearchDropdown.css';

// import Dropdown from '../../components/Dropdown/';
import SelectorBox from '../../components/SelectorBox';
import SelectorList from '../../components/SelectorList';


/**
 * Multiple search selection dropdown container component
 */
export class MultiSearchDropdown extends React.Component {

    static propTypes = {
        // loading: PropTypes.bool.isRequired,
        // expanded: PropTypes.bool.isRequired,
        // data: PropTypes.arrayOf(PropTypes.object).isRequired,
        // selected: PropTypes.arrayOf(PropTypes.object).isRequired,
        // filtered: PropTypes.arrayOf(PropTypes.object).isRequired,
        // search: PropTypes.string,
        // // queried: PropTypes.bool,
        // dropdownCss: PropTypes.string,

        url: PropTypes.string.isRequired,
        responseKey: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.onClickBox = this.onClickBox.bind(this);
        this.onClickListItem = this.onClickListItem.bind(this);
        this.onClickLabel = this.onClickLabel.bind(this);
        // this.onChangeSearch = this.onChangeSearch.bind(this);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.state = {
            loading: false,
            expanded: false,
            data: [],
            selected: [],
            filtered: [],
            search: '',
            // queried: false,
            dropdownCss: ''
        }
    }

    componentDidMount() {

        document.addEventListener('mousedown', this.handleClickOutside);

        // start request
        this.setState({ loading: true })

        fetch(this.props.url)
            .then(res => {
                return res.json();
            }).then(json => {
                // request success
                this.setState({
                    loading: false,
                    data: json[this.props.responseKey]
                })
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
            // this.props.dispatch(collapseDropdown());
        }
    }

    onClickBox(e) {
        if (e.target.nodeName === 'LABEL') return;

        if (!this.state.expanded) {
            if (e.target.nodeName === 'INPUT') e.target.focus();
            else e.target.getElementsByTagName('input')[0].focus();
            // this.props.dispatch(expandDropdown());
            this.setState({ expanded: true })
        }
    }

    onClickListItem(e) {
        let item = e.target;

        if (item.className === 'selected-item')
            return;

        // add label
        item.className = 'selected-item';

        let selectedItem = {
            code: item.getAttribute('data-code'),
            name: item.textContent
        }

        let selectedArr = this.state.selected.slice(0);
        selectedArr.push(selectedItem);

        this.setState({ selected: selectedArr })
    }

    onClickLabel(e) {
        let item = e.target;

        // remove label

        let selectedItem = {
            code: item.getAttribute('data-code'),
            name: item.textContent
        }

        let selectedArr = this.state.selected.slice(0);

        let index = _containsObject('index', selectedItem, selectedArr)
        if (typeof index === 'number') selectedArr.splice(index, 1)

        this.setState({ selected: selectedArr })
    }

    // onChangeSearch(e) {
    //     let input = e.target.value;
    //     if (input === '') {

    //     }
    //         // this.props.dispatch(resetFilter(e.target.value));
    //     else {

    //     }
    //         // this.props.dispatch(filterList(e.target.value));
    // }

    renderSelector() {
        const selectClassName = 'countries-dropdown multi-search-dropdown';
        return <div>
            <SelectorBox
                onClick={ this.onClickBox }
                onClickLabel={ this.onClickLabel }
                // onChangeSearch={ this.onChangeSearch }
                expanded={ this.state.expanded }
                selected={ this.state.selected }
                dropdownCss={ selectClassName } />
            <SelectorList
                onClickItem={ this.onClickListItem }
                data={ this.state.data }
                filtered={ this.state.filtered }
                selected={ this.state.selected }
                search={ this.state.search }
                loading={ this.state.loading }
                expanded={ this.state.expanded }
                dropdownCss={ selectClassName } />
        </div>;
    }

    render() {
        return <div ref={this.setWrapperRef}>
            { this.renderSelector() }
        </div>;
    }

}

export default MultiSearchDropdown;