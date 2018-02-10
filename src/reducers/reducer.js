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
                expanded: false,
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
                data: action.data,
            })
        }
        default: {
            return state;
        }
    }
}

export default reducer;