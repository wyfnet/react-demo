import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store';

class AuthorizedRoute extends Component {
  componentWillMount() {
    store.dispatch({
      type: 'GET_LOGGED_USER'
    })
  }
  render() {
    const { component: Component, isLogin, ...rest } = this.props;
    return ( 
      <Route {...rest} render={props => { 
        return isLogin
          ? <Component {...props} /> 
          : <Redirect to="/login" />
      }} />
    );
  }
}
//这里的loginStatus就是store里面申明的reducer 
const stateToProps = ({ loginStatus }) => ({
  pending: loginStatus.pending,
  isLogin: loginStatus.isLogin
});

export default connect(stateToProps)(AuthorizedRoute);