import React, {Component} from "react";
import error from "../assets/uh-oh.jpg";

/**
 * This component handles invalid page requests
 */
class Error extends Component {
  render () {
    return (
      <div>
        <div id="error">
          <img alt="Invaid Page" src={error}/>
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
