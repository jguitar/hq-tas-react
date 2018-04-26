import React, { Component } from "react";
import { connect } from "react-redux";
import { Translate } from "react-redux-i18n";
import { Navbar, MenuItem, Nav, NavDropdown } from "react-bootstrap";

import { changeLanguage } from "../../actions";

export class NavBar extends Component {
  state = {};

  render() {
    return (
      <Navbar className="header-nav">
        <Navbar.Header>
          <Navbar.Brand>
            <Translate value="app.title" site_name="Valencia Antigua" />
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown eventKey={3} title="Change language" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} value="en" onClick={this.props.setLanguage}>
              EN
            </MenuItem>
            <MenuItem eventKey={3.2} value="es" onClick={this.props.setLanguage}>
              ES
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setLanguage: (e) => {
      dispatch(changeLanguage(e.target.getAttribute("value")));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
