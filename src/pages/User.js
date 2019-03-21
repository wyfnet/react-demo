import React, { Component } from 'react';

class User extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Link to="/user/profile">个人资料页面</Link>
        <Link to="/user/set">个人资料修改页面</Link>
        {this.props.children}
      </div>
    );
  }
}
 
export default User;