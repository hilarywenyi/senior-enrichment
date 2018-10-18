import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component{
    render() {
        return (
            <div>
                <h1>Welcome to the 
                    Margaret Hamilton Interplanetary Academy 
                    for Javascript
                </h1>
                <h2><i>Meet our <Link to="/students">Students</Link></i><br />
                    <i>Browse our <Link to="/campuses">Campuses</Link></i>
                </h2>
            </div>
        )
    }
}