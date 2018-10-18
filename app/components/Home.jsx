import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component{
    render() {
        return (
            <div>
                <h2>Welcome to the 
                    Margaret Hamilton Interplanetary Academy 
                    for Javascript
                </h2>
                <h2><i><Link to="/students">Students</Link></i><br />
                    <i><Link to="/campuses">Campuses</Link></i>
                </h2>
            </div>
        )
    }
}