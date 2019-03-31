import React, { Component } from 'react';

class Test extends Component {
  render() { 
    const { title } = this.props;
    return ( 
      <div>
        { title }
      </div>
     );
  }
}
 
export default Test;