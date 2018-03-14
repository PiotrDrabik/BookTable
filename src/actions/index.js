export const setDate = newDate => {
    return {
        type: 'SET_DATE',
        bookDate: newDate
    }
}

export const setTime = newTime => {
    return {
        type: 'SET_TIME',
        bookTime: newTime
    }
}