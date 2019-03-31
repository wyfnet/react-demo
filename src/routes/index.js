import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import Test from '../pages/Test';
import NotFound from '../pages/404';
import User from '../pages/User';
import Login from '../pages/Login';

class BasicApp extends Component {
  render() { 
    return (
      <BasicLayout>
        <Switch>
          <Route exact path="/" render={ props => <Home {...props} title="首页" /> } />
          <Route path="/digital_albuum" render={ props => <Test {...props} title="数字专辑" /> } />
          <Route path="/playlist" render={ props => <Test {...props} title="歌单" /> } />
          <Route path="/album" render={ props => <Test {...props} title="专辑" /> } />
          <Route path="/singer" render={ props => <Test {...props} title="歌手" /> } />
          <Route path="/crbt" render={ props => <Test {...props} title="彩铃" /> } />
          <Route path="/topic" render={ props => <Test {...props} title="专题" /> } />
          <Route path="/musician" render={ props => <Test {...props} title="音乐人" /> } />
          <Route path="/login" render={ props => <Login {...props} title="登录" /> } />
          <Auth path="/user" component={User}/>
          <Route component={NotFound} />
        </Switch>
      </BasicLayout>
    );
  }
}
 
export default BasicApp;
