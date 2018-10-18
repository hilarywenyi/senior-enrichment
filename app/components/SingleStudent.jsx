import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { thunkFetchStudents } from '../reducers/students'

class SingleStudent extends React.Component {
    
    componentDidMount() {
        const studentId = this.props.match.params.studentId;
        console.log("this is studentId = ", studentId)
        this.props.fetchSingleStudent(studentId);
    }

    render() {
        const { student } = this.props;
        //BUGGGG HERE: student is undefined
        console.log("STUDENT NEED TO RENDER HERE=", this.props)//ERROR!!!!!!!!      
        return (
        student 
        ? (
        <div className="student-bio">
                <div className = "campuseImage-container" >
                   <img src = {student.imageUrl} />
                </div>

                <div>
                    <h3>{student.name}</h3>
                    <h6><Link to={`/campuses/${student.campus.id}`}>{student.campus.name}</Link></h6>
                    <h6>{student.email}</h6>
                    <h6>GPA: {student.gpa}</h6>
                </div>
        {/* <div className="button-container">
          <button className="btn-main" onClick={navigateToEditStudent}>Edit</button>
        </div> */}
        </div>
        )
        : <h1>Loading...</h1>)
    }

}


  const mapStateToProps = function (state, getState) {
       //const studentId = Number(ownProps.match.params.studentId);
     // const studentId = Number(getState.match.params.studentId); 
     console.log("state from mapStateToProps", state)
     return {
      
      student: state.student
      //.find(student => student.id === studentId )
      //student: state.students.find(student => student.id === studentId)
    };
  }

  const mapDispatchToProps = dispatch => {
    console.log("feching state from mapDispatchToProps", dispatch)
      return({
          fetchSingleStudent: (studentId) => dispatch(thunkFetchStudents(studentId)),
      })
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleStudent);