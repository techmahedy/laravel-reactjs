import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-2">
                <Link to="/" className="mr-4">
                    <Nav.Item>Home</Nav.Item>
                </Link>
                <Link to="/project" className="mr-4">
                    <Nav.Item>Project List</Nav.Item>
                </Link>
                <Link to="/createproject" className="mr-4">
                    <Nav.Item>Create Project</Nav.Item>
                </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
     );
}
 
export default Header;