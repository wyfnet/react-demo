import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

class BlankLayout extends Component {
  render() { 
    const { route: {routes}, ...rest } = this.props;
    return ( 
      <div className="blank">
        { renderRoutes(routes, { ...rest }) }
      </div>
    );
  }
}
 
export default BlankLayout;