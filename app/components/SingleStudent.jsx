import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const SingleStudent = (props) => {
       
        const { student, campuses } = props;
        const campus = campuses.find( campus => campus.id === student.campusId)
        return student 
        ? (
        <div className="student-bio">
                <div className = "campuseImage-container" >
                   <img src = {student.imageUrl} />
                </div>

                <div>
                    <h3>{student.firstName} {student.lastName}</h3>
                    <h6>{ campus && <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>}</h6>
                    <h6>{student.email}</h6>
                    <h6>GPA: {student.gpa}</h6>

                </div>
        {/* <div className="button-container">
          <button className="btn-main" onClick={navigateToEditStudent}>Edit</button>
        </div> */}
        </div>
        )
        : <h1>Loading...</h1>
}

  const mapStateToProps = function (state, getState) {
    const studentId = Number(getState.match.params.studentId); 
    return {
       student: state.students.find(student => student.id === studentId) || {name: ''},
       campuses: state.campuses
    }
  }

export default connect(mapStateToProps)(SingleStudent);