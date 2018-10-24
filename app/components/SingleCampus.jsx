import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux" 
import Students from './Students'


const SingleCampus = (props) => {

    const  { campus, students } = props
    console.log('student need to be filtered', students)
    console.log('campus', campus)

         return campus
           ? (
            <div >
            <div className = "page-header">
               <h1> Campus: {campus.name} </h1>
            </div>

            <div className = "row">
                <div className = "campuseImage-container" >
                   <img src = {campus.imageUrl} />
                   <h4> {campus.address}</h4>
                   <h4> {campus.description}</h4>
                   <Students students = {students} />
                   {/* <h6><Link to={`/campuses/${campus.id}`}>{campus.students.firstName}</Link></h6> */}
                   {/* {students.map(students => <Students students = {students} key = {students.id}/>)} */}
                   {/* {students.filter(students => students.campusId === campusId)} */}
                </div>
            </div>               
            </div> 
         ) 
         : <h1> Loading... </h1>   
}

const mapStateToProps = function(state,ownProps) {
    const campusId = Number(ownProps.match.params.campusId);    
    
    return ({
        campus: state.campuses.find(campus => campus.id === campusId),
        students: state.students.filter(student => student.campusId === campusId),
        campusId
    })
}

export default connect(mapStateToProps)(SingleCampus);
