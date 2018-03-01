import React from 'react';
import PropTypes from 'prop-types';

import { _containsObject, _filterByName } from '../../utils'

import './MultiSearchDropdown.css';

import DropdownBox from '../../components/DropdownBox';
import DropdownList from '../../components/DropdownList';


class MultiSearchDropdown extends React.Component {

    static propTypes = {
        url: PropTypes.string.isRequired,
        responseKey: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.onClickBox = this.onClickBox.bind(this);
        this.onClickListItem = this.onClickListItem.bind(this);
        this.onClickLabel = this.onClickLabel.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.state = {
            loading: false,
            expanded: false,
            data: [],
            selected: [],
            filtered: [],
            search: '',
            dropdownCss: ''
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        // start request
        this.setState({ loading: true });
        fetch(this.props.url)
            .then(res => {
                return res.json();
            }).then(json => {
                this.setState({
                    loading: false,
                    data: json[this.props.responseKey]
                });
            }).catch(err => {
                // Handle error
                console.log(err);
            });
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        // collapse dropdown
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ expanded: false });
        }
    }

    onClickBox(e) {
        // expand dropdown
        if (e.target.nodeName === 'LABEL') return;
        if (!this.state.expanded) {
            if (e.target.nodeName === 'INPUT') e.target.focus();
            else e.target.getElementsByTagName('input')[0].focus();
            this.setState({ expanded: true });
        }
    }

    onClickListItem(e) {
        // add label
        let item = e.target;
        if (item.className === 'selected-item')
            return;
        item.className = 'selected-item';
        let selectedItem = {
            code: item.getAttribute('data-code'),
            // name: item.getAttribute('data-name')
            name: item.textContent
        };
        let selectedArr = this.state.selected.slice(0);
        selectedArr.push(selectedItem);
        this.setState({ selected: selectedArr });
    }

    onClickLabel(e) {
        // remove label
        let item = e.target;
        let selectedItem = {
            code: item.getAttribute('data-code'),
            name: item.textContent
        }
        let selectedArr = this.state.selected.slice(0);
        let index = _containsObject('index', selectedItem, selectedArr);
        if (typeof index === 'number') selectedArr.splice(index, 1);
        this.setState({ selected: selectedArr });
    }

    onChangeSearch(e) {
        // filter dropdown list
        // or reset filtered dropdown
        let input = e.target.value;
        if (input === '') {
            this.setState({
                filtered: [],
                search: ''
            });
        } else {
            let dataArr = this.state.data.slice(0);
            let filteredData = _filterByName(input, dataArr)
            this.setState({
                filtered: filteredData,
                search: input
            });
        }
    }

    renderSelector() {
        const selectClassName = 'countries-dropdown multi-search-dropdown';
        return <div>
            <DropdownBox
                onClick={ this.onClickBox }
                onClickLabel={ this.onClickLabel }
                onChangeSearch={ this.onChangeSearch }
                expanded={ this.state.expanded }
                selected={ this.state.selected }
                dropdownCss={ selectClassName } />
            <DropdownList
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