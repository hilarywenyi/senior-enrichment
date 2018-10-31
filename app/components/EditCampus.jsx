import React from 'react';
import { connect } from 'react-redux';
import { thunkPutCampus } from '../reducers';


const EditCampus = (props) => {

  const { handleSubmit } = props;
  const campusId = props.match.params.campusId;
  const campus = props.campuses.find(campus => campus.id === campusId)
  return (
    <form className = "form-horizontal" onSubmit = {(event)=>{handleSubmit(event, campusId)}}>
    <fieldset>
      <legend>Edit Campus</legend>
      <div className = "form-group">
      <label>Name</label>
      <div>
        <input className = "form-control" type = "text" defaultValue = {campus.name} name = "campusName" placeholder ="Enter campus name" />
      </div>
      </div>

       <div className = "form-group">
      <label>Image</label>
      <div>
        <input className = "form-control" type = "text" defaultValue = {campus.image} name = "campusImage" placeholder ="Enter campus image" />
      </div>
      </div>

      <div className = "form-group">
      <div>
         <button type = "submit" className ="btn btn-default">Submit Change</button>
      </div>
      </div>
    </fieldset>
    
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(event,id) {
      event.preventDefault();
      const name = event.target.campusName.value;
      const image = event.target.campusImage.value || undefined;
      dispatch(thunkPutCampus({id, name, image}, ownProps.history))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(EditCampus);