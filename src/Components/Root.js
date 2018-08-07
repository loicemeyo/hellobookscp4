import React, { Component } from 'react';

class Root extends Component {
  render() {
    return (
      <div>
        <p> home page</p>
          {this.props.children}
          </div>
    );
  }
}

export default Root;
