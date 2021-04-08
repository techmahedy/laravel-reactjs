import React from 'react';
import {NavDropdown,Nav,Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="/">Task Management</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/">Home</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default Header;