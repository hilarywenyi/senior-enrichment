import axios from "axios";
/*  Students, a sub-reducer to manage students in your Redux store */
//action type
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

//action creator
export const getStudents = (students) => {
    return {
        type: GET_STUDENTS,
        students
    }
}

export const getStudent = (student) => {
    return {
        type: GET_STUDENT,
        student
    }
}

export const editStudent = student => {
    return {
        type: EDIT_STUDENT,
        student
    }
}

export const deleteStudent = student => {
    return {
        type: DELETE_STUDENT,
        student
    }
}

//Thunk creators
//Get students OR single student
export const thunkFetchStudents = () => {
    return async (dispatch) => {
        try {
        const res = await axios.get('/api/students');
        const students = res.data;
        const action = getStudents(students);
        dispatch(action);
        } catch (error) {
            console.log('fetchStudents went wrong', error)
        }
    }
}

//Post a studnet
export function thunkPostStudent (prevState, studentData) {
    const { campusId } = studentData
    return async (dispatch) => {
      try {
        const res = await axios.post(`/api/campuses/${campusId}/new-student`) 
        const newStudent = res.data;
        const action = getStudent(newStudent);
        dispatch(action);
        prevState.push(`/campuses/${campusId}`); 
      } catch (error) {
          console.log(error)
      }
    }
}


export function thunkPutStudent (prevState, studentData, studentId) {

    return async (dispatch) => {
    try{
        const res = await axios.put(`/api/students/${studentId}`, studentData)
        const updatedStudent = res.data;
        const action = editStudent(updatedStudent);
        dispatch(action);
        prevState.push(`/students/${updatedStudent.id}`);
       } catch (error) {
        console.log(error)
       }   
    }
}

//DELETE a student
export const thunkDeleteStudent = (id) => {
    return async dispatch => {
        try {
          //now backend ready to delete
          await axios.delete(`/api/students/${id}`);
          const action = deleteStudent(id);
          dispatch(action);
        } catch (error) {
          console.log('removeStudent went wrong', error)
        }
    }
}

//reducer
const initialState = [];
export default function studentReducer (state = initialState, action){

    switch (action.type){
      case GET_STUDENTS: 
        console.log("action.students in reducer = ", action.students)
        return action.students;

      case GET_STUDENT: 
        return [...state,action.student];
      
      case EDIT_STUDENT: {
        const studentToEdit = state.find(student => student.id === action.student.id);
        const indexOfStudentToEdit = state.indexOf(studentToEdit);
        let newState = [...state];
        newState.splice(indexOfStudentToEdit, 1, action.student);
        return newState;
      }
      // return [...state,action.newStudent];
      
      case DELETE_STUDENT:
       return state.filter(element => element.id !== action.id); 
             
      default:
        return state
    }
}