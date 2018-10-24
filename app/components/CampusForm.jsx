//CampusForm
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkPostCampus, thunkPutCampus, writeCampusName, writeCampusDescription } from '../reducers';

class CampusForm extends Component {

  componentDidMount(){
    this.props.setInput();
  }

  render() {

    const {
      label,
      buttonText,
      campusName,
      campusDescription,
      handleChange,
      handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="form-horizontal">

        <div className="form-group">
          <label className="control-label">Campus Name</label>
          <div className="col-sm-10">
            <input
              value={campusName}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter campus name"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label">Campus Description</label>
          <div className="col-sm-10">
            <textarea
              value={campusDescription}
              onChange={handleChange}
              type="text"
              name="description"
              placeholder="Enter campus description"
              className="form-control"
            />
          </div>
        </div>

        <div>
          <button type="submit" className="btn-main">{buttonText}</button>
        </div>

      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campusName: state.campusEntry.campusName,
    campusDescription: state.campusEntry.campusDescription
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  const { campusToEdit, history } = ownProps;

  return {
    setInput: () => {
      if (campusToEdit) {
        dispatch(writeCampusName(campusToEdit.name));
        dispatch(writeCampusDescription(campusToEdit.description));
      } else {
        dispatch(writeCampusName(''));
        dispatch(writeCampusDescription(''));
      }
    },
    handleChange: (event) => {
      const input = event.target.value;
      const field = event.target.name;
      if (field === 'name') dispatch(writeCampusName(input));
      if (field === 'description') dispatch(writeCampusDescription(input));
    },
    handleSubmit: (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const description = event.target.description.value;
      if (campusToEdit) { // if campus passed as props, then must be editing existing campus
        const editCampus = thunkPutCampus(history, { name, description }, campusToEdit.id);
        dispatch(editCampus);
      } else { // if no campus passed as props, then must be creating new campus
        const createCampus = thunkPostCampus(history, { name, description });
        dispatch(createCampus);
      }
      dispatch(writeCampusName(''));
      dispatch(writeCampusDescription(''));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusForm);