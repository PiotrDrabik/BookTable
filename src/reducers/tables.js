const initialState = {
    selectedTable: ''
};

const tables = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TABLE':
            return {
                ...state,
                selectedTable: action.table
            }
        default:
            return state;
    }
}

export default tables;