import {combineReducers} from 'redux';
import bookedDate from './bookeddate';
import bookedTime from './bookedtime';
import restaurant from './restaurant';
import tables from './tables';
import alert from './alert';
import contact from './contact';

const bookTableReducers = combineReducers({
    bookedDate,
    bookedTime,
    restaurant,
    alert,
    tables,
    contact
});

export default bookTableReducers;