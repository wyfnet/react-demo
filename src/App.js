import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// import RoutesMap from './routes'; //非react-router-config模式
// import routes from './routes/config'; //适用于整个网站只有一种布局
import routes from './routes/config-diff-layout'; //适用于一个网站有多个布局

class App extends Component {
  render() {
    return (
      <Router>
        {/* <RoutesMap /> */}
        {renderRoutes(routes)}
      </Router>
    );
  }
}

export default App;
