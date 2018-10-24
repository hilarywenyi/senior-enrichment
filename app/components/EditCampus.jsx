import React from 'react';
import { connect } from 'react-redux';
import CampusForm from './CampusForm';


const EditCampus = (props) => {
  return (
    <CampusForm
      campusToEdit={props.campusToEdit}
      label={`Edit Campus`}
      buttonText={'Submit Changes'}
      history={props.history}
    />
  )
}

const mapStateToProps = function (state, getState) {
  const campusId = Number(getState.match.params.campusId);
  return {
    campusToEdit: state.campuses.find(campus => campus.id === campusId)
  };
};


export default connect(mapStateToProps)(EditCampus);