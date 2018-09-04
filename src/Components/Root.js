import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

/**
 * This component enables '/' main route to have children routes
 */
class Root extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Root;
