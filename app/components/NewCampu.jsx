//New Campus
import React from 'react';
import { thunkPostCampus } from '../reducers';
import CampusForm from './CampusForm';


const NewCampus = (props) => {
  console.log('HISTORY', props.history);
  return (
    <CampusForm
      label={'Create a Campus'}
      postOrPut={thunkPostCampus}
      buttonText={'Create Campus'}
      history={props.history}
    />
  )
}

export default NewCampus;