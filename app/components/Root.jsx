//Boilerplates
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//component
import  Navbar  from './Navbar'
import  Campuses  from './Campuses';
import  Students  from './Students';

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
        </Switch>
      </main>
    </div>
  );
}


export default Root
