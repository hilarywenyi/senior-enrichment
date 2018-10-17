//Boilerplates
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Import components
import  Navbar  from './Navbar'
import  Campuses  from './Campuses';
import  Students  from './Students';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';


const Root = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <Switch>
          <Route exact path = "/campuses" component = {Campuses} />
          <Route exact path = "/students" component = {Students} />
          <Route exact path = "/campuses/:campusId" component = {SingleCampus} />
          <Route exact path = "/students/:studentId" component = {SingleStudent} />
          
        </Switch>
      </main>
    </div>
  );
}


export default Root
