const initialState = {
    bookTime: ''
};

const bookedtime = (state = initialState, action) => {
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

export default bookedtime;