import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserLayout extends Component {
  state = {  }
  render() { 
    return ( 
      <div style={{paddingLeft: 200}}>
        <Link to="/user/profile">个人资料页面</Link>
        <Link to="/user/update">个人资料修改页面</Link>
        <hr/>
        {this.props.children}
      </div>
    );
  }
}
 
export default UserLayout;