import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Profile from '../pages/Profile';
import Update from '../pages/Update';
import Other from '../pages/Other';
import NotFound from '../pages/404';

class BaseRoutes extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Router>
          <BasicLayout>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/detail/:id" component={Detail} />
              <Route exact path="/other" component={Other} />
              <Route exact path="/user" render={() => <Redirect to="/user/profile" />} />
              <UserLayout>
                <Route exact path="/user/profile" component={Profile} />
                <Route exact path="/user/update" component={Update} />
              </UserLayout>
              <Route component={NotFound} />
            </Switch>
          </BasicLayout>
        </Router>
      </div>
    );
  }
}
 
export default BaseRoutes;