import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router";
import "react-bootstrap";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron" id="welcomePage">
          <p>Hello-Books is a simple application that helps manage a library <br />
						and its processes like stocking, tracking and renting books.
          </p>
          <div id="outer">
            <Link to="/signup" class="inner"><button type="submit" class="btn btn-primary">Get Started</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
