const initialState = {
    enabled: false,
    message: ''
};

const alert = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ALERT':
            return {
                ...state,
                enabled: true,
                message: action.message
            }
        case 'REMOVE_ALERT':
            return {
                ...state,
                enabled: false,
                message: ''
            }
        default:
            return state;
    }
}

export default alert;