import { combineReducers } from 'redux';
import campuses from './campuses'; // just wanna get [...campuses]
import students from './students'
import campusEntry from './campusEntry'
import studentEntry from './studentEntry'


const rootReducer = combineReducers({
   campuses, // campuses : []
   students,
   campusEntry,
   studentEntry
});

export default rootReducer;

