const initialState = {
    name: 'Restaurant Voyage',
    address: 'Wrocław, Lotnicza 11',
    arrangement: []
};

const restaurant = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ARRANGEMENT':
            return {
                ...state,
                arrangement: action.arrangement
            }
        default:
            return state;
    }
}

export default restaurant;