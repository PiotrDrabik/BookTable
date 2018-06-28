const initialState = {
    selectedTable: '',
    selectedTableId: ''
};

const tables = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_TABLE':
            return {
                ...state,
                selectedTable: action.selectedTable,
                selectedTableId: action.selectedTableId
            }
        default:
            return state;
    }
}

export default tables;