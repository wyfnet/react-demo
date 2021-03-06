import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <div id="header">
        <div className="container">
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/playlist">歌单</Link></li>
            <li><Link to="/album">专辑</Link></li>
            <li><Link to="/singer">歌手</Link></li>
            <li><Link to="/login">登录</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default Header;