const initialState = {
    bookTime: ''
};

const bookedTime = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TIME':
            return {
                ...state,
                bookTime: action.bookTime
            }
        default:
            return state;
    }
}

export default bookedTime;