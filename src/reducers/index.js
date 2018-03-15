import {combineReducers} from 'redux';
import bookeddate from './bookeddate';
import bookedtime from './bookedtime';
import restaurant from './restaurant';

const bookTableReducers = combineReducers({
    bookeddate,
    bookedtime,
    restaurant
});

export default bookTableReducers;