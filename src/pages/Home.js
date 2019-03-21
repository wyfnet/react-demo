import React, { Component } from 'react';
import Timer from '../components/Timer/Timer';

class Home extends Component {
  state = {}
  render() {
    return ( 
      <div>
        <h1>这里是首页</h1>
        <Timer />
      </div>
    );
  }
}

export default Home;