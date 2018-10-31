import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux" ;
import Students from './Students';

const SingleCampus = (props) => {

    const  { campus, students, history } = props
    console.log('student need to be filtered', students)
    console.log('campus', campus)
    
         return (
            <div >
                <div className = "page-header">
                <h1> Campus: {campus.name} </h1>
                </div>

                <div className = "row">
                    <div className = "campuseImage-container" >
                    <img src = {campus.imageUrl} />
                    <h4> {campus.address}</h4>
                    <h4> {campus.description}</h4>
                    <Students students = {student}/>
                    {/* <Students students = {students} history={history} /> */}

                        <div className = "row">
                        <Link className = "link-button btn btn-default" to = {`/campuses/${campus.id}/new-student`}>Create New Student</Link>
                        <Link className = "link-button btn btn-default" to = {`/campuses/${campus.id}/edit-student`}>Edit Campus</Link>
                        </div>    

                        <div>
                        {/* <h6><Link to={`/campuses/${campus.id}`}>{campus.students.firstName}{campus.students.lastName}</Link></h6> */}
                        {/* {students.map(students => <Students students = {students} key = {students.id}/>)} */}
                            {/* {students.filter(students => students.campusId === campusId)} */}
                        </div>             
                    </div>
                </div>               
            </div> 
         ) 
         //campus? 
         //: <h1> Loading... </h1>   
}

const mapStateToProps = function(state,ownProps) {
    const campusId = Number(ownProps.match.params.campusId);    
    
    return ({
        campus: state.campuses.find(campus => campus.id === campusId)|| {name: ''},
        students: state.students.filter(student => student.campusId === campusId),
        campusId
    })
}

export default connect(mapStateToProps)(SingleCampus);
