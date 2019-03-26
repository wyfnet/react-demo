import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <div id="header">
        <ul>
          <li><Link to="/index">首页</Link></li>
          <li><Link to="/digital_albuum">数字专辑</Link></li>
          <li><Link to="/playlist">歌单</Link></li>
          <li><Link to="/album">专辑</Link></li>
          <li><Link to="/singer">歌手</Link></li>
          <li><Link to="/crbt">彩铃</Link></li>
          <li><Link to="/topic">专题</Link></li>
          <li><Link to="/musician">音乐人</Link></li>
        </ul>
      </div>
    );
  }
}
 
export default Header;