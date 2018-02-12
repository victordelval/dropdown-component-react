
export const expandDropdown = () => {
    return {
        type: 'EXPAND_DROPDOWN'
    }
}

export const collapseDropdown = () => {
    return {
        type: 'COLLAPSE_DROPDOWN'
    }
}

export const startRequest = () => {
    return {
        type: 'REQUEST_START'
    }
}

export const successRequest = data => {
    return {
        type: 'REQUEST_SUCCESS',
        data
    }
}

export const addLabel = selected => {
    return {
        type: 'ADD_LABEL',
        selected
    }
}

export const removeLabel = selected => {
    return {
        type: 'REMOVE_LABEL',
        selected
    }
}

export const filterList = search => {
    return {
        type: 'FILTER_LIST',
        search
    }
}

export const resetFilter = search => {
    return {
        type: 'RESET_FILTER',
        search
    }
}