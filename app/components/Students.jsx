import React, {Component} from "react";
import { Link } from "react-router-dom" 
import { connect } from "react-redux" 

import { thunkFetchStudents, thunkDeleteStudent } from '../reducers/students'
/* tr: a row for a table; th: header cell of a table; td: a cell for a table */
class Students extends Component {
     componentDidMount() {
         this.props.fetchInitialStudents()
     }
     render() {
         return (
             <div className = "students-container">
                 <h2>List of All Students</h2>
                
                 <hr />

                 <table className="table">
                  <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    {
                     this.props.students.map(student => {
                        return (
                            <tr key = {student.id}>
                                 <td><Link to ={`student/${student.id}`}>{student.id}</Link></td>
                                 <td><Link to ={`student/${student.id}`}>{student.name}</Link></td>
                            </tr>
                        )
                     })
                    }  
                  </tbody>
                  </table>
                 
             </div>
         )
     }
       
                 
}


const mapStateToProps = function(state) {
    return {
        students: state.students
    };
}

const mapDispatchToProps = dispatch => {
    return {
        //dispatch initial student list
        fetchInitialStudent: () => dispatch(thunkFetchStudents())
        //deleteStdent
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Students);
