import React, {Component} from "react";
import { Link } from "react-router-dom" 
import { connect } from "react-redux" 

//import reducer
import { thunkFetchCampus } from  "../reducers/campuses"

class Campus extends Componnet {
    componentDidMount() {
        this.props.getCampus();
    }

    render() {
        console.log("props in SingleCampus:", this.props.campus.students);

        const campus = this.props.campus;
        const students = this.props.campus.students;


    }
}