import React from 'react';
import '../assets/css/header.css';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <div className='bg-dark'>
      <Navbar className='navBar' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img width='60px' height='60px' src={logo} alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link activeClassName='current' as={NavLink} to='/home'>
                Home
              </Nav.Link>
              <Nav.Link activeClassName='current' as={NavLink} to='/about'>
                About
              </Nav.Link>

              <Nav.Link activeClassName='current' as={NavLink} to='/services'>
                Services
              </Nav.Link>
              <Nav.Link activeClassName='current' as={NavLink} to='/dashboard'>
                Dashboard
              </Nav.Link>
              <Nav.Link activeClassName='current' as={NavLink} to='/register'>
                <button className='login-button'>Sign Up</button>
              </Nav.Link>
              <Nav.Link activeClassName='current' as={NavLink} to='/login'>
                <button className='login-button'>Login</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
