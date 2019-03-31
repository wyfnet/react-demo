import React, { Component } from 'react';
import Timer from '../components/Timer/Timer';

class Home extends Component {
  render() {
    const { title } = this.props;
    return ( 
      <div>
        <Timer />
        <h1>{ title }</h1>
      </div>
    );
  }
}

export default Home;