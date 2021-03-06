// npm install -g add-react-component
import React, { Component } from "react";
import "./style.css";
// npm install react-bootstrap bootstrap have to use this one to pull in the proper one
import { Navbar, Nav } from "react-bootstrap";

export default class NavigationBar extends Component {
// https://www.npmjs.com/package/react-bootstrap-navbar
    render() {
        return (

            <Navbar expand="lg" className="navbar-container" >
                <Navbar.Brand href="/">Google Books Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Books</Nav.Link>
                        <Nav.Link href="/bookshelf">Saved</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}