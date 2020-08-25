import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
export class Navigation extends Component {
  render() {
    return (
      <Navbar id="nav" expand="lg">
        <Navbar.Toggle aria-contols="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink id="a" to="/">
              Home
            </NavLink>
            <NavLink id="b" to="/Me">
              Me
            </NavLink>
            <NavLink id="c" to="/Contact">
              Contact
            </NavLink>
            <NavLink id="d" to="/Resume">
              Resume
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <h1 id="mobile_view">Portfolio</h1>
      </Navbar>
    );
  }
}
