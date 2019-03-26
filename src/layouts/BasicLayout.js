import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './BasicLayout.css';

class BasicLayout extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="container">
        <Header></Header>
        <div id="content">
          { this.props.children }
        </div>
        <Footer></Footer>
        {/* <br/>
        <Link to="/">首页</Link>
        <br/>
        <Link to="/other">其他页</Link>
        <br/>
        <Link to="/user">用户页面</Link>
        <br/>
        <Link to={{pathname: "/detail/88888",search: "?abc=1234"}}>详情页</Link>
        <hr/> */}
      </div>
    );
  }
}
 
export default BasicLayout;