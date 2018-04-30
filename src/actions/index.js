export const setDate = (newRawDate, newDate) => {
    return {
        type: 'SET_DATE',
        rawBookDate: newRawDate,
        bookDate: newDate
    }
};

export const setTime = newTime => {
    return {
        type: 'SET_TIME',
        bookTime: newTime
    }
};

export const setAlert = message => {
    return {
        type: 'SET_ALERT',
        message: message
    }
};

export const removeAlert = () => {
    return {
        type: 'REMOVE_ALERT'
    }
};

export const setArrangement = (data) => {
    return {
        type: 'SET_ARRANGEMENT',
        arrangement: data
    }
};

export const setTable = (table) => {
    return {
        type: 'SET_TABLE',
        selectedTable: table
    }
};

export const setName = (name) => {
    return {
        type: 'SET_NAME',
        name: name
    }
};

export const setEmail = (email) => {
    return {
        type: 'SET_EMAIL',
        email: email
    }
};
 
export const setComment = (comment) => {
    return {
        type: 'SET_COMMENT',
        comment: comment
    }
};