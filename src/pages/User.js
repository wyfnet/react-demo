import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import store from '../store';
import Profile from './Profile';
import Update from './Update';

class User extends Component {
  logout() {
    store.dispatch({
      type: 'SET_LOGGED_USER',
      isLogin: false
    });
    this.props.history.push('/login');
  }
  render() { 
    return ( 
      <div>
        <button onClick={() => this.logout()}>退出登录</button>
        <br/>
        <br/>
        <br/>
        <Link to="/user/profile">个人资料页面</Link>
        <Link to="/user/set">个人资料修改页面</Link>
        <Switch>
          <Route path="/user/profile" component={Profile} />
          <Route path="/user/set" component={Update} />
        </Switch>
        {this.props.children}
      </div>
    );
  }
}
 
export default User;