import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Intro from './../components/Introduction/Intro';
import FitnessAppContainer from './../components/FitnessAppContainer';
import Edit from './../components/Settings/Edit';
import ExerciseAnalytics from './../components/Analytics/ExerciseAnalytics';
import {PrivateRoute} from './PrivateRoute';

export const history = createHistory();

class AppRouter extends Component {
 render() {
   return (
     <Router history={history}>
       <div>
       <Switch>
         <Route path="/" component={Intro} exact={true}/>
         <PrivateRoute path="/exercise-log" component={FitnessAppContainer} isAuthenticated={this.props.auth}/>
         <PrivateRoute path="/exercise-analytics" component={ExerciseAnalytics} isAuthenticated={this.props.auth}/>
         <PrivateRoute path="/edit" component={Edit} isAuthenticated={this.props.auth}/>
       </Switch>
       </div>
     </Router>
   )
 }
}


export default AppRouter;
