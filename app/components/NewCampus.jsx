import React from 'react';
import {connect} from 'react-redux'
import { thunkPostCampus } from '../reducers'

const NewCampus = (props) => {
    
    const { handleSubmit } = props;
    return (
        <form className = 'form-horizontal' onSubmit = { handleSubmit }>
        <fieldset>
            <legend>Create a Campus</legend>

            <div className = 'form-group'>
               <label>Name</label>
               <div>
                 <input type = 'text' name = 'campusName' placeholder = 'Enter campus name' />
               </div>
            </div>

            <div className = 'form-group'>
               <label>Image</label>
               <div>
                 <input type = 'text' name = 'campusImage' placeholder = 'Enter the URL of campus photo' />
               </div>
            </div>

            <div className = 'form-group'>
                <div>
                    <button type = 'submit' className = 'btn btn-default'>Create Campus</button>
                </div>
            </div>
        </fieldset>  
        </form>
    )
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleSubmit (event) {
            event.preventDefault();
            const name = event.target.campusName.value;
            const image = event.target.campusImage.value || undefined;
            dispatch(thunkPostCampus({name, image}, ownProps.history));
        }
    }
}

export default connect(null, mapDispatchToProps)(NewCampus);