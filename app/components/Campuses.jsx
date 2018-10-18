import React, {Component} from "react";
import { Link } from "react-router-dom" 
import { connect } from "react-redux" 


//import from reducer 
import { thunkFetchCampuses, thunkDeleteCampus } from '../reducers/campuses'

 class Campuses extends Component {
     componentDidMount(){
        //  console.log("COMPONENT DID MOUNT", this.props)
         this.props.fetchAllCampuses()
     }

     render() {      
             const { campuses } = this.props //campuses here is a campusesList 
             console.log("PROPS FROM COMPONENT DID MOUNT RENDER IN = ", this.props)
             return ( 
                <div className = "home">
                    <div className = "campuses-container">
                    <h2>All Campuses</h2>
                        <ul>
                            
                            {
                                (campuses && campuses.length) ? campuses.map(campus => (
                                <li key={campus.id} >
                                    <a href = "#">
                                        <img src={campus.imageUrl} alt = "image" /> 
                                    </a> 
                                <Link to ={`/campuses/${campus.id}`}>{campus.name}</Link> 
                                {/* <button 
                                    type = "submit"
                                    onClick = {() => this.props.deleteCampus(campus.id)}>Delete Campus</button>  */}
                                </li>          
                                )) : 'no Campus'
                            }
                        </ul>
                   </div>
                {/*     <div className = "button-container">
                      <button className = "button-main" onClick = {navigateToNewCampus}> Add New Campus </button>
                    </div> */}
                </div>
             )
    }
 }

const mapStateToProps = function(state) {
    console.log("MAP STATE TO PROPS" , state.campuses)
    return {
        campuses: state.campuses, //campusesList: state.campuses
        students: state.students
    }
};

const mapDispatchToProps = dispatch => {
    console.log("MAP DISPATCH TO PROPS", dispatch)
    return {
        fetchAllCampuses: () => dispatch(thunkFetchCampuses()),
        deleteCampus: id => dispatch(thunkDeleteCampus(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Campuses);

