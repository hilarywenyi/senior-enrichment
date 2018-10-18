import React from "react";
import { Link } from "react-router-dom" 
import { connect } from "react-redux" 

//import thunk reducer
import { thunkFetchCampus } from  "../reducers/campuses"

class SingleCampus extends React.Component {
    
    componentDidMount() {
        const campusId = this.props.match.params.campusId;
        console.log("this is campusId", campusId)
        this.props.fetchSingleCampus(campusId);
    }

    render() {
        const  campus  = this.props.campus
        //const  { campus }  = this.props;
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

            <div className = "row">
                <div className="col-md-12">
                        <div className="page-header">
                            <h2>All Students in { campus.name } Campus
                                <Link to="/students/newStudent">
                                    <button type="button" className="btn btn-primary"> Add Student</button>
                                </Link>
                            </h2>
                        </div>
                </div>            
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
        fetchSingleCampus: (campusId) => dispatch(thunkFetchCampus(campusId)),
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleCampus);
