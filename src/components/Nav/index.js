import React, {Fragment, PureComponent, useState, useRef, useEffect, useContext, useReducer} from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';
import {ConfigContext} from '../../App';
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import * as $ from 'jquery'

import 'bootstrap/dist/css/bootstrap.min.css'

import {Nav,Navbar, NavDropdown,NavItem } from 'react-bootstrap'

function Navi(props) {
    return (
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <LinkContainer to="/">
    <NavItem >Home</NavItem>
  </LinkContainer>
   {/* &nbsp; &nbsp;
  <LinkContainer to="/about">
    <NavItem >About</NavItem>
  </LinkContainer>
       */}
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
      //   <Navbar bg="light" expand="lg">
      //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav">
      //     <Nav >
      //       <Nav.Link as={Link} ><Link id="one" to="/">Home</Link></Nav.Link>
      //       <Nav.Link as={Link} ><Link id="two" to="/about">About</Link></Nav.Link>
            
      //     </Nav>
          
      //   </Navbar.Collapse>
      // </Navbar>
        
    );
}



Navi.propTypes = {
    nav: PropTypes.object,
    // getAbout: PropTypes.func,
};


export default Navi
