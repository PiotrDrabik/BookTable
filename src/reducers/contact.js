const initialState = {
    name: '',
    email: '',
    comment: ''
};

const contact = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.email
            }
        case 'SET_COMMENT':
            return {
                ...state,
                comment: action.comment
            }
        default:
            return state;
    }
}

export default contact;