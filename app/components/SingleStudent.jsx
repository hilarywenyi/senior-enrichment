import React from "react";
import { Link } from "react-router-dom" 
import { connect } from "react-redux" 

//import reducer
import { thunkFetchStudent } from "../reducers/students"

class SingleStudent extends React.Component {
    componentDidMount() {
        this.props.fetchSingleStudent();    
    }

    render() {
        
        const { student } = this.props;
        console.log("props in SingleStudent:", this.props);
         return (
       
        <div key = {student.id} className = "student-container">
            <div className = "page-header">
               <h1> : {student.name} </h1>
            </div>
        </div>    
         )
        
    }


}

const mapStateToProps = function(state) {
    console.log("STATE SHOULD BE HERE!!!!!!", state.student)
    return ({
        student: state.student
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchSingleStudent: () => dispatch(thunkFetchStudent())
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleStudent);