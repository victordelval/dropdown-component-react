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
        default: {
            return state;
        }
    }
}

export default reducer;