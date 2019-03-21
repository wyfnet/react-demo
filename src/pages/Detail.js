import React, { Component } from 'react';

class Detail extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
  }
  render() { 
    let params = new URLSearchParams(this.props.location.search);
    console.log(params);
    return ( 
      <div>
        <h1>这里是详情页</h1>
        <p>path参数为：{this.props.match.params.id}</p>
        <p>search参数为：{params.get('abc')}</p>
      </div>
    );
  }
}
 
export default Detail;