import React from 'react';
import moment from 'moment';

const TopResult = (props) => {

    let {restaurant, bookedDate, bookedTime, tables} = props.selected;
    return (
            <div className="list-group padding-top-15">
                <div className="list-group-item first-row">Your choice:</div>
                <div className="list-group-item list-group-item-success">{restaurant.name}</div>
                <div className={"list-group-item " + (bookedDate.bookDate ? 'list-group-item-success' : '')}>
                    <span>{bookedDate.bookDate ? moment(bookedDate.bookDate).format('LL') : 'select date'}</span>
                </div>
                <div className={"list-group-item " + (bookedTime.bookTime ? 'list-group-item-success' : '')}>
                    <span>{bookedTime.bookTime ? bookedTime.bookTime : 'select time'}</span>
                </div>
                <div className={"list-group-item " + (tables.selectedTable ? 'list-group-item-success' : '')}>
                    <span>{tables.selectedTable ? tables.selectedTable : 'select table'}</span>
                </div>
            </div>
        )
};

export default TopResult;