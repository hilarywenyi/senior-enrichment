//New Campus
import React from 'react';
import { thunkPostCampus } from '../reducers';
import CampusForm from './CampusForm';


const NewCampus = (props) => {
  console.log('prevState = ', props.prevState);
  return (
    <CampusForm
      label={'Create a Campus'}
      postOrPut={thunkPostCampus}
      buttonText={'Create Campus'}
      prevState={props.prevState}
    />
  )
}

export default NewCampus;