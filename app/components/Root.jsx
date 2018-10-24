//Boilerplates
import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

//Import components
import Home from './Home';
import  Navbar  from './Navbar'

import  Campuses  from './Campuses';
import  Students  from './Students';

import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';

import store from '../store'

//import reducer
import {thunkFetchCampuses} from  '../reducers/campuses'
import { thunkFetchStudents } from '../reducers/students'

export default class Root extends Component {
  componentDidMount() {
    store.dispatch(thunkFetchCampuses())
    store.dispatch(thunkFetchStudents())
  }

  render() {
      return (
        <div>
          <nav>
            <Navbar />
          </nav>
          <main>
            <Switch>
              <Route exact path = "/campuses" component = {Campuses} />
              <Route exact path = "/students" component = {Students} />
              <Route exact path = "/campuses/:campusId" component = {SingleCampus} />
              <Route exact path = "/students/:studentId" component = {SingleStudent} />
              {/* <Route exact path = "/campuses/new-campus" component = {NewCampus} /> */}
              {/* <Route exact path = "/campuses/new-student" component = {NewStudent} /> */}
              {/* <Route exact path = "/campuses/edit-campus" component = {EditCampus} /> */}
              {/* <Route exact path = "/campuses/edit-student" component = {EditStudent} /> */}

              <Route component = {Home} />
              
            </Switch>
          </main>
        </div>
      )
  }

}

// //Boilerplates
// import React from 'react';
// import {Route, Switch} from 'react-router-dom';

// //Import components
// import Home from './Home';
// import  Navbar  from './Navbar'

// import  Campuses  from './Campuses';
// import  Students  from './Students';

// import SingleCampus from './SingleCampus';
// import SingleStudent from './SingleStudent';

// //import NewCampus from './NewCampus';
// //import NewStudent from './NewStudent';

// //import EditCampus from './EditCampus';
// //import EditStudent from './EditStudent';

// //export default class Root extends Component {}
// const Root = () => {
//   return (
//     <div>
//       <nav>
//         <Navbar />
//       </nav>
//       <main>
//         <Switch>
//           <Route exact path = "/campuses" component = {Campuses} />
//           <Route exact path = "/students" component = {Students} />
//           <Route exact path = "/campuses/:campusId" component = {SingleCampus} />
//           <Route exact path = "/students/:studentId" component = {SingleStudent} />
//           {/* <Route exact path = "/campuses/new-campus" component = {NewCampus} /> */}
//           {/* <Route exact path = "/campuses/new-student" component = {NewStudent} /> */}
//           {/* <Route exact path = "/campuses/edit-campus" component = {EditCampus} /> */}
//           {/* <Route exact path = "/campuses/edit-student" component = {EditStudent} /> */}

//           <Route component = {Home} />
          
//         </Switch>
//       </main>
//     </div>
//   );
// }


// export default Root
