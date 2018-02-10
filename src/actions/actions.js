
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