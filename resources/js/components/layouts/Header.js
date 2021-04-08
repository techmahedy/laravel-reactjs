import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/">
                    <Nav.Item>Home</Nav.Item>
                </Link>
                <Link to="/project">
                    <Nav.Item>Project List</Nav.Item>
                </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
     );
}
 
export default Header;