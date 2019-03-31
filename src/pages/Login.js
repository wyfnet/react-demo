import React, { Component } from 'react';
import store from '../store';

class Login extends Component {
  login(){
    store.dispatch({
      type: 'SET_LOGGED_USER',
      isLogin: true
    });
    console.log(this.props);
    this.props.history.push('/');
  }
  render() { 
    return ( 
      <div className="login">
        <button onClick={() => this.login()}>登录</button>
      </div>
    );
  }
}
 
export default Login;