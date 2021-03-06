import axios from 'axios';

/*  Campuses, a sub-reducer to manage campuses in Redux store */

//Action types
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
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

export const editCampus = campus => {
    return {
        type: EDIT_CAMPUS,
        campus
    }
}

export const deleteCampus = campus => {
    return {
        type: DELETE_CAMPUS,
        campus
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

//POST a campus (adding)
export function thunkPostCampus (campus, history) {
    return async (dispatch) => {
      try {
          const res = await axios.post('/api/campuses', campus)
          const newCampus = res.data;
          const action = getCampus(newCampus);
          dispatch(action);
          history.push(`/campuses/${newCampus.id}`);
      } catch (error) {
          console.log(error)
      }
    }
}

//PUT a campus (editting)
export function thunkPutCampus (campus, history) {

    return function thunk (dispatch) {

      return axios.put(`/api/campuses/${campus.id}`, {name: campus.name, image:campus.image})
        .then(res => res.data)
        .then(editedCampus => {
          dispatch(editCampus(editedCampus));
          history.push(`/campuses/${editedCampus.id}`);
        });
    }
}

//DELETE a campus:
export const thunkDeleteCampus = (history, campus) => {
    return async dispatch => {
        try {
          await axios.delete(`/api/campuses/${campus.id}`, {id: campus.id});
          const action = deleteCampus(campus);
          dispatch(action);
          history.push(`/campuses`)
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
        return [...state, action.campus];        
      
      case EDIT_CAMPUS: {
        const editedCampuses = state.campuses.filter(campus => campus.id!==Number(action.campus.id));
        return Object.assign({},state, {campuses: [...editedCampuses, action.campus]});
      }
            
      case DELETE_CAMPUS: {
        const campusToDelete = state.find(campus => campus.id === action.campusId);
        const indexOfCampusToDelete = state.indexOf(campusToDelete);
        let newState = [...state];
        newState.splice(indexOfCampusToDelete, 1);
        return newState; 
      }

      default:
        return state
    }
}
