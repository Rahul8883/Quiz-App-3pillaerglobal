import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Home  from "./component/Home";
import QuizInstruction from "./component/quiz/quizInstruction";
import Play from './component/quiz/play';
import QuizSummary from './component/quiz/QuizSummary';
import Registration from './component/Registration';
import Login from './component/Login';
import Time from './component/timer'
import PrivateRoute from './component/PrivateRoute'
import Logout from './component/Logout'
/**
 * Providing routes of all component in this application.
 */


function App (){
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/registration" exact component={Registration}></Route>
          <Route path="/play/instruction" exact component={QuizInstruction}></Route>
         
          <Route path="/play/QuizSummary" exact component={QuizSummary}></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/time" exact component={Time}></Route>
          <PrivateRoute path="/play/Quiz"  component={Play}></PrivateRoute>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    )
  }
/**
 * This function is use to  indication whenever any wrong path entered into the browser.
 */
  function NotFound(){
    return(
      <div>
        <h1>Page Not Found 404</h1>
      </div>
    )
  }


//   const PrivateRoute = ({component: Component, ...rest}) => {
//     return (

//         // Show the component only when the user is logged in
//         // Otherwise, redirect the user to /signin page
//         <Route {...rest} render={props => (
//          this.props.isloginTrue ?
//                 <Component {...props} />
//             : <Redirect to="/login" />
//         )} />
//     );
// };


export default App

