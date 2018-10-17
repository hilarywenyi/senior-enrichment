import axios from "axios";
/*  Students, a sub-reducer to manage students in your Redux store */
//action type
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const ADD_STUDENT = 'ADD_STUDENT';
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

export const addStudent = newStudent => {
    return {
        type: ADD_STUDENT,
        newStudent
    }
}

export const deleteStudent = id => {
    return {
        type: DELETE_STUDENT,
        id
    }
}

//Thunk creators
//Get students
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

//Get single student
export const thunkFetchStudent = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('/api/students/:studentId');
            const student = res.data;
            const action = getStudent(student);
            console.log('fetch thunk one student = ', student)
            dispatch(action);
        } catch (error) {
            console.log('fetchCampuses went wrong', error)
        }  
    }
}

//Add a student: need to fix this part
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
      
      case ADD_STUDENT:
       return [...state,action.newStudent];
      
      case DELETE_STUDENT:
       return state.filter(element => element.id !== action.id) ; 
             
      default:
        return state
    }
}