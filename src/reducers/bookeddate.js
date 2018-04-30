const initialState = {
    bookDate: ''
};

const bookedDate = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DATE':
            return {
                ...state,
                bookDate: action.bookDate,
                rawBookDate: action.rawBookDate
            }
        default:
            return state;
    }
}

export default bookedDate;