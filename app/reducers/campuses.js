import axios from 'axios';

/*  Campuses, a sub-reducer to manage campuses in Redux store */

//Action types
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const ADD_CAMPUS = 'ADD_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

//Action creators
export const getCampuses = campuses => {
    return {
        type: GET_CAMPUSES,
        campuses
    }
}

export const getCampus = campus => {
    return {
        type: GET_CAMPUS,
        campus
    }
}

export const addCampus = newCampus => {
    return {
        type: ADD_CAMPUS,
        newCampus
    }
}

export const deleteCampus = id => {
    return {
        type: DELETE_CAMPUS,
        id
    }
}


//Thunk creators
//GET campuses:
export const thunkFetchCampuses = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('/api/campuses');
            const campuses = res.data;
            const action = getCampuses(campuses);
            console.log('fetchCampuses thunk campuses = ', campuses)
            dispatch(action);
        } catch (error) {
            console.log('fetchCampuses went wrong', error)
        }  
    }
}

//GET a single campus:(dispatch,getState) for postBook for update
export const thunkFetchCampus = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`/api/campuses/${id}`);
            const campus = res.data;
            const action = getCampus(campus);
            console.log('fetchCampuses thunk one campus = ', campus)
            dispatch(action);
        } catch (error) {
            console.log('fetchCampuses went wrong', error)
        }  
    }
}

//DELETE a campus:
export const thunkDeleteCampus = (id) => {
    return async dispatch => {
        try {
          await axios.delete(`/api/campuses/${id}`);
          const action = deleteCampus(id);
          dispatch(action);
        } catch (error) {
          console.log('removeCampus went wrong', error)
          //toastr.error('Oops!Sorry our bad');
        }
    }
}

//Reducer
const initialState = []
export default function campusReducer (state = initialState, action){   
    switch (action.type){
      case GET_CAMPUSES: 
        return action.campuses;
      
      case GET_CAMPUS: 
        console.log("action.campus in reducer = ", action.campus);
        return action.campus;        
      
      case ADD_CAMPUS:
        return [...state, action.newCampus];   
           
      
      case DELETE_CAMPUS:
        return state.filter(element => element.id !== action.id); 

      default:
        return state
    }
}
