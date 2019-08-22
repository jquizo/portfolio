import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import  { Link }  from 'react-router-dom';


import './sass/sidenavstyles.scss'

const Sidenav = () => (
    <React.Fragment>
        <Navbar expand="lg" id="sideNav">
            <Navbar.Brand className="navbar-brand js-scroll-trigger" href="/"> HOME </Navbar.Brand>
            <Navbar.Toggle className="navbar-toggler navbutton" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="navbar-collapse ">
                <Nav className="ml-auto navbar-nav">
                    <Nav.Item className="nav-item"><Link className="nav-link " to="/" href="/">Home</Link></Nav.Item>
                    <Nav.Item className="nav-item"><Link className="nav-link " to="/projects" href="/">Projects</Link></Nav.Item>
                    <Nav.Item className="nav-item"><Link className="nav-link" to="/contact" href="/contact">Contact</Link> </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
)

export default Sidenav