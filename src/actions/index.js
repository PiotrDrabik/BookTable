export const setDate = (newRawDate, newDate) => {
    return {
        type: 'SET_DATE',
        rawBookDate: newRawDate,
        bookDate: newDate
    }
}

export const setTime = newTime => {
    return {
        type: 'SET_TIME',
        bookTime: newTime
    }
}