import {combineReducers} from 'redux';
import bookeddate from './bookeddate';
import bookedtime from './bookedtime';
import restaurant from './restaurant';
import tables from './tables';
import alert from './alert';

const bookTableReducers = combineReducers({
    bookeddate,
    bookedtime,
    restaurant,
    alert,
    tables
});

export default bookTableReducers;