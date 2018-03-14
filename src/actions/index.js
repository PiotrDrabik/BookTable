export const setDate = (newRawDate, newDate) => {
    return {
        type: 'SET_DATE',
        rawBookDate: newRawDate,
        bookDate: newDate
    }
}
//{type: 'SET_DATE', rawBookDate: date, bookDate: moment(date).format('LL')}
export const setTime = newTime => {
    return {
        type: 'SET_TIME',
        bookTime: newTime
    }
}