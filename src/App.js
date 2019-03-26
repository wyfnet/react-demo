import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoutes from './routes/routes';


class App extends Component {
  render() {
    return (
      <Router>
        <BaseRoutes/>
      </Router>
    );
  }
}

export default App;
