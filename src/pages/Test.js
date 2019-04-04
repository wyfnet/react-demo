import React, { Component } from 'react';

class Test extends Component {
  render() { 
    console.log(this.props);
    const { title } = this.props;
    return ( 
      <div>
        { title }
      </div>
     );
  }
}
 
export default Test;