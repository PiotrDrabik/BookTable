import {combineReducers} from 'redux';
import bookeddate from './bookeddate';
import bookedtime from './bookedtime';
import restaurant from './restaurant';
import alert from './alert';

const bookTableReducers = combineReducers({
    bookeddate,
    bookedtime,
    restaurant,
    alert
});

export default bookTableReducers;