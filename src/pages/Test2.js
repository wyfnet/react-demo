import React, { Component } from 'react';

class Test extends Component {
  render() { 
    const { route: { name } } = this.props;
    return ( 
      <div>
        { name }
      </div>
     );
  }
}
 
export default Test;