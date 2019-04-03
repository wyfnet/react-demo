//适用于采用了react-router-config模块
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './BasicLayout.scss';

class BasicLayout extends Component {
  render() { 
    const { route: { routes }, ...rest } = this.props;
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
              { renderRoutes(routes, { ...rest }) }
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
 
export default BasicLayout;