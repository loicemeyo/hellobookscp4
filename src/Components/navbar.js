import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropDown} from 'react-bootstrap';

class Navigation extends React.Component {
    render (){
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Hello Books</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Home</NavItem>
                        <NavItem eventKey={1} href="#">Login</NavItem>
                        <NavItem eventKey={1} href="#">Signup</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Navigation;