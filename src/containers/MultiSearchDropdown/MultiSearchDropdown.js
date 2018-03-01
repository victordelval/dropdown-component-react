import React from 'react';
import PropTypes from 'prop-types';

import { _containsObject, _filterByName } from '../../utils'

import './MultiSearchDropdown.css';

import DropdownBox from '../../components/DropdownBox';
import DropdownList from '../../components/DropdownList';


class MultiSearchDropdown extends React.Component {

    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        loading: PropTypes.bool.isRequired,
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
            expanded: false,
            selected: [],
            filtered: [],
            search: '',
            dropdownCss: ''
        };
    }

    async componentDidMount() {
        // adds listener for click outside event
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        // removes listener for click outside event
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
            let dataArr = this.props.data.slice(0);
            let filteredData = _filterByName(input, dataArr)
            this.setState({
                filtered: filteredData,
                search: input
            });
        }
    }


    render() {
        const selectClassName = 'countries-dropdown multi-search-dropdown';
        return (
            <div ref={this.setWrapperRef}>
                <DropdownBox
                    onClick={ this.onClickBox }
                    onClickLabel={ this.onClickLabel }
                    onChangeSearch={ this.onChangeSearch }
                    selected={ this.state.selected }
                    dropdownCss={ selectClassName } />

                <DropdownList
                    data={ this.props.data }
                    loading={ this.props.loading }
                    onClickItem={ this.onClickListItem }
                    filtered={ this.state.filtered }
                    selected={ this.state.selected }
                    search={ this.state.search }
                    expanded={ this.state.expanded }
                    dropdownCss={ selectClassName } />
            </div>
        );
    }
}

export default MultiSearchDropdown;