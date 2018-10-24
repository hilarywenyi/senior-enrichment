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