import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import pathToRegexp from 'path-to-regexp';

class Authorized extends Component {
  checkAuth() {
    const { component: Component, isLogin, location} = this.props;
    console.log(this.props);
    const path = location.pathname;
    let todo = null;
    if(!isLogin) {
      // if(!pathToRegexp('/login').test(path)) {
        todo = <Redirect to="/login" />
      // }
    }else{
      if(pathToRegexp('/login').test(path)){ //在登录的情况下用户访问的是不是登录页面，是登录页面重定向到首页
        todo = <Redirect to="/" />
      } else { //访问非登录页面判断是否有权限访问
        if(pathToRegexp('/playlist').test(path)) { //没有权限访问跳403
          todo = <Redirect to="/error/403" />
        } else {
          todo = <Component {...this.props} />;
        }
      }
    }
    return todo;
  }

  render() {
    // return (
    //   <Fragment>
    //     {/* { isLogin ? children : <Redirect to="/login" /> } */}
    //     { this.checkAuth() }
    //   </Fragment>
    // )
    const { component: Component, isLogin, ...rest} = this.props;
    return ( 
      <Route {...rest} render={ props => { 
        return isLogin ? <Component {...props} /> : <Redirect to="/login" />
      }} />
    );
  }
}

export default Authorized;