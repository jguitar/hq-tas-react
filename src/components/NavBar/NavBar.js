import React from "react";
import { Translate } from "react-redux-i18n";
import { Navbar, MenuItem, Nav, NavDropdown } from "react-bootstrap";

const NavBar = props => (
  <Navbar className="header-nav">
    <Navbar.Header>
      <Navbar.Brand>
        <Translate value="app.title" site_name="Valencia Antigua" />
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavDropdown eventKey={3} title="Change language" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1} value="en" onClick={props.setLanguage}>
            En
        </MenuItem>
        <MenuItem eventKey={3.2} value="es" onClick={props.setLanguage}>
            Es
        </MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default NavBar;
