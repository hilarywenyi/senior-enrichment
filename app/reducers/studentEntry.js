import axios from 'axios';

// Action types
const WRITE_STUDENT_FIRST_NAME = 'WRITE_STUDENT_FIRST_NAME';
const WRITE_STUDENT_LAST_NAME = 'WRITE_STUDENT_LAST_NAME';
const WRITE_STUDENT_EMAIL = 'WRITE_STUDENT_EMAIL';


// Action creators
export const writeStudentFirstName = (firstName) => {
  return {
    type: WRITE_STUDENT_FIRST_NAME,
    firstName
  }
}

export const writeStudentLastName = (lastName) => {
  return {
    type: WRITE_STUDENT_LAST_NAME,
    lastName
  }
}

export const writeStudentEmail = (email) => {
  return {
    type: WRITE_STUDENT_EMAIL,
    email
  }
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
};

//Thunk creator to add a student: need to fix this part maybe 
export const thunkAddStudent = (history, studentData) => {
    return async dispatch => {
        try {
         const { campusId } = studentData;   
         //now backend ready to post(adding) and double check api route
         const res = await axios.post(`/api/campuses/${campusId}/new-student`, studentData);
         const newStudent = res.data;
         const action = getStudent(newStudent);
         dispatch(action);
         history.push(`/campuses/${campusId}`)
        } catch (error) {
            console.log('thunk addingCampus went wrong', error)
        }
    }
}

// Reducers
export default function campusEntryReducer (state = initialState, action) {
  switch (action.type) {

    case WRITE_STUDENT_FIRST_NAME:
      return {...state, firstName: action.firstName};

    case WRITE_STUDENT_LAST_NAME:
      return {...state, lastName: action.lastName};

    case WRITE_STUDENT_EMAIL:
      return {...state, email: action.email};

    default:
      return state;
  }
}