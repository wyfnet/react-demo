import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BasicLayout extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Link to="/home">首页</Link>
        <br/>
        <Link to="/other">其他页</Link>
        <br/>
        <Link to="/user">用户页面</Link>
        <br/>
        <Link to={{pathname: "/detail/88888",search: "?abc=1234"}}>详情页</Link>
        <hr/>
        { this.props.children }
      </div>
    );
  }
}
 
export default BasicLayout;