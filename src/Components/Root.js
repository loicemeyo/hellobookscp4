import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

class Root extends Component {
  // const tokenvalid=
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
