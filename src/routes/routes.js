import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';
// import UserLayout from '../layouts/UserLayout';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Profile from '../pages/Profile';
import Update from '../pages/Update';
import Other from '../pages/Other';
import Login from '../pages/Login';
import NotFound from '../pages/404';

class RoutesMap extends Component {
  render() { 
    return (
      <Switch>
          <Route exact path="/login" component={Login} />
          <BasicLayout>
            <Route exact path="/" render={() => <Redirect to="/home"/>} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/other" component={Other} />
            <Route exact path="/user" render={() => <Redirect to="/user/profile"/>} />
            <Route exact path="/user/profile" component={Profile} />
            <Route exact path="/user/update" component={Update} />
          </BasicLayout>
          <Route component={NotFound} />
      </Switch>
    );
  }
}
 
export default RoutesMap;
