import axios from 'axios';

// Action types
const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';
const WRITE_CAMPUS_DESCRIPTION = 'WRITE_CAMPUS_DESCRIPTION';

// Action creators
export const writeCampusName = (campusName) => {
  return {
    type: WRITE_CAMPUS_NAME,
    campusName
  }
}

export const writeCampusDescription = (campusDescription) => {
  return {
    type: WRITE_CAMPUS_DESCRIPTION,
    campusDescription
  }
}


//ADD a campus:

export const thunkAddCampus = newCampus => {
    return async dispatch => {
        try {
            console.log("Thunk add newCampus", newCampus);
            const { data } = await axios.post("/api/campuses/", newCampus);
            const action = addCampus(data);
            dispatch(action);
        } catch (error) {
            console.log("thunkAddCampus went wrong", error)
        }
    }
}

// export const thunkAddCampus = (history, campusData) => {
//     return async dispatch => {
//         try {
//          //now backend ready to post(adding)
//          const res = await axios.post('/api/campuses', campusData);
//          const newCampus = res.data;
//          const action = addCampus(newCampus);
//          dispatch(action);
//          history.push(`/campuses/${newCampus.id}`)
//         } catch (error) {
//             console.log('thunk addingCampus went wrong', error)
//         }
//     }
// }


const initialState = {
  campusName: '',
  campusDescription: ''
}; //maybe a problem here, need array or object?

//Reducers
export default function campusEntryReducer (state = initialState, action) {
  switch (action.type) {

    case WRITE_CAMPUS_NAME:
      return {...state, campusName: action.campusName};

    case WRITE_CAMPUS_DESCRIPTION:
      return {...state, campusDescription: action.campusDescription};

    default:
      return state;
  }
}
