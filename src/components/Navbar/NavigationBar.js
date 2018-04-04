import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from './../../firebase/firebase';
import FontAwesome from 'react-fontawesome';
import logo from './logo.svg';
import '../../App.css';
import './navbar.css';

import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logOut() {
    return firebase.auth().signOut();
    
  }


  render() {
    return (
      <div>
        <Navbar color="#0a0a0a" className="nav-bar fixed-top" dark expand="md">
          <div className="container">
          <NavbarBrand href="/"> <img src={logo}  className="App-logo" alt="logo" />React Fitness</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/exercise-log">Home</Link>

              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/exercise-analytics">Analytics</Link>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                    <Link to="/edit"  className="dropdown-item">Edit Exercises</Link>
                  <DropdownItem>
                    Add Exercises
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    View on Github&nbsp;&nbsp;<FontAwesome name="github"/>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="pl-1">
                <Button outline color="primary" onClick={this.logOut}>Log out</Button>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
        <br/>
      </div>
    );
  }
}

export default NavigationBar;
