const initialState = {
    bookDate: ''
};

const bookeddate = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DATE':
            return [
                ...state,
                {
                    bookDate: action.bookDate
                }
            ]
        default:
            return state;
    }
}

export default bookeddate;