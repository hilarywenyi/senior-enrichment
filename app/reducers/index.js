import { combineReducers } from 'redux';
import campuses from './campuses'; // just wanna get [...campuses]
import students from './students'


const rootReducer = combineReducers({
   campuses, // campuses : []
   students 
});

export default rootReducer;

