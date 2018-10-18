//Boilerplates
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Import components
import Home from './Home';
import  Navbar  from './Navbar'

import  Campuses  from './Campuses';
import  Students  from './Students';

import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';

//import NewCampus from './NewCampus';
//import NewStudent from './NewStudent';


const Root = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        {/* <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1> */}
        <Switch>
          <Route exact path = "/campuses" component = {Campuses} />
          <Route exact path = "/students" component = {Students} />
          <Route exact path = "/campuses/:campusId" component = {SingleCampus} />
          <Route exact path = "/students/:studentId" component = {SingleStudent} />
          {/* <Route exact path = "/campuses/new-campus" component = {NewCampus} /> */}
          {/* <Route exact path = "/campuses/new-student" component = {NewStudent} /> */}
          <Route component = {Home} />
          
        </Switch>
      </main>
    </div>
  );
}


export default Root
