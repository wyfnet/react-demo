import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './BasicLayout.scss';

class BasicLayout extends Component {
  state = {  }
  render() { 
    const { children } = this.props;
    return ( 
      <div className="main">
        <Header></Header>
        <div id="content">
          <div className="container">
            <div className="content">
              <br/>
              <br/>
              <br/>
              <br/>
              { children }
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
 
export default BasicLayout;