import React from "react";
import { Navbar, Nav, NavItem, MenuItem, NavDropDown } from "react-bootstrap";
import { Link } from "react-router";

class Navigation extends React.Component {
  render() {
    return (
      // <Navbar fixedTop>
      //     <Navbar.Header>
      //         <Navbar.Brand>
      //             <a href="#">Hello Books</a>
      //         </Navbar.Brand>
      //         <Navbar.Toggle/>
      //     </Navbar.Header>
      //     <Navbar.Collapse>
      //         <Nav>
      //             <NavItem eventKey={1} href="#">Home</NavItem>
      //             <NavItem eventKey={1} href="#">Login</NavItem>
      //             <NavItem eventKey={1} href="#">Signup</NavItem>
      //         </Nav>
      //     </Navbar.Collapse>
      // </Navbar>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand"><Link to="/">Hello Books</Link></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link"><Link to="/" class="inner">Home</Link>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link"><Link to="/login" class="inner">Login</Link>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" ><Link to="/signup" class="inner">Signup</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navigation;