import {combineReducers} from 'redux';
import bookeddate from './bookeddate';
import bookedtime from './bookedtime';

const bookTableReducers = combineReducers({
    bookeddate,
    bookedtime
});

export default bookTableReducers;