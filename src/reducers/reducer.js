import { _containsObject } from '../utils'

const initialState = {
    loading: false,
    expanded: false,
    data: [],
    selected: [],
    search: '',
    queried: false,
    dropdownCss: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'EXPAND_DROPDOWN': {
            return Object.assign({}, state, {
                expanded: true
            })
        }
        case 'COLLAPSE_DROPDOWN': {
            return Object.assign({}, state, {
                expanded: false
            })
        }
        case 'REQUEST_START': {
            return Object.assign({}, state, {
                loading: true
            })
        }
        case 'REQUEST_SUCCESS': {
            return Object.assign({}, state, {
                loading: false,
                data: action.data
            })
        }
        case 'ADD_LABEL': {
            let selectedArr = state.selected.slice(0);
            selectedArr.push(action.selected);
            return Object.assign({}, state, {
                selected: selectedArr
            })
        }
        case 'REMOVE_LABEL': {
            let selectedArr = state.selected.slice(0);
            let index = _containsObject('index', action.selected, selectedArr)
            if (typeof index === 'number') selectedArr.splice(index, 1)
            return Object.assign({}, state, {
                selected: selectedArr
            })
        }

        default: {
            return state;
        }
    }
}

export default reducer;