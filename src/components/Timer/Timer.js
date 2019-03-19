import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date()
    }
    //类的方法默认是不会绑定 this 的，所以需要手动绑定this
    // this.closeTimer = this.closeTimer.bind(this);
  }
  //组件被挂载到DOM上，调用此方法，此方法也是用的比较多的，方法初始化等
  componentDidMount() {
    this.TimerId = setInterval(() => {
      this.tick();
    },1000)
  }
  //组件从DOM移除，React会调用此方法
  componentWillUnmount() {
    clearInterval(this.TimerId);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  //类的方法默认是不会绑定 this 的，所以需要手动绑定this
  //也可以从方法调用出把this传过来
  closeTimer(that,id) {
    clearInterval(that.TimerId);
    console.log('Timer清楚了');
    console.log(that);
    console.log(id);
  }
  render() {
    return (
      <div className="timer">
        <h1 onClick={this.closeTimer.bind(this,12345)}>Hello,world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
 
export default Timer;