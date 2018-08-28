import React, {Component} from "react";
import error from "../assets/uh-oh.jpg"
class Error extends Component {
  render () {
    return (
      <div>
        <div id="error">
          <img src={error}/>
        </div>
        <br/>
        <div id="error2">
          <p> Sorry! This page does not exist </p>
        </div>
      </div>
    );

  }
    
}
export default Error;
