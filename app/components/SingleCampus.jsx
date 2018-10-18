import React from "react";
import { Link } from "react-router-dom" 
import { connect } from "react-redux" 

//import thunk reducer
import { thunkFetchCampuses } from  "../reducers/campuses"
import Students from './Students'

class SingleCampus extends React.Component {
    
    componentDidMount() {
        const campusId = this.props.match.params.campusId;
        console.log("this is campusId", campusId)
        this.props.fetchSingleCampus(campusId);
    }

    render() {
        const  { campus,history } = this.props
        //BUGGGGGGGG HERE: WHERE IS MY CAMPUS
        //const  { campus }  = this.props;
        const navigateToNewStudent = () => history.push(`/campuses/${campus.id}/new-student`);
        //const navigateToEditCampus = () => history.push(`/campuses/${campus.id}/edit-campus`);
        
        console.log("CAMPUS NEED TO RENDER HERE", this.props)//ERROR!!!!!!!!      
         return campus
           ? (
            <div >
            <div className = "page-header">
               <h1> Campus: {this.props.campuses.name} </h1>
            </div>

            <div className = "row">
                <div className = "campuseImage-container" >
                   <img src = {campus.imageUrl} />
                </div>

                <div className = "campus-details" >
                   <ul>
                       <li> {campus.address} Fact #1</li>
                       <li> {campus.description} Fact #2</li>
                   </ul>
                </div> 
            </div>

            <Students campus={campus} history={history} />
                <div className="buttons-container">
                    <button className="btn-add-new-student" onClick={navigateToNewStudent}>Add New Student</button>
                    
                    {/* <div>
                    <button className="btn-main" onClick={navigateToEditCampus}>Edit Campus</button>
                    <button className="btn-main" onClick={() => confirmDelete(campus)}>Delete Campus</button>
                    </div> */}
                </div>
            </div> 
         ) 
         : <h1> Loading... </h1>   
    }

}

const mapStateToProps = function(state) {
    console.log("state from mapStateToProps", state)
    return ({
        campus: state.campus,
        //students: state.students
    })
}

const mapDispatchToProps = dispatch => {
    console.log("feching state from mapDispatchToProps", dispatch)
    return ({
        fetchSingleCampus: (campusId) => dispatch(thunkFetchCampuses(campusId)),
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleCampus);
