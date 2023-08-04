import React from 'react'
import styles from '../styles/NavBar.module.css';
import Container from 'react-bootstrap/Container';
import useClickOutsideSelected from '../hooks/useClickOutsideArea.js';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const { expanded, setExpanded, ref } = useClickOutsideSelected();

  return (
    <Navbar className={styles.NavBar} expand="md" fixed='top' expanded={expanded}>
    <Container>
        <NavLink exact to='/'>Remember</NavLink>
        <NavLink
                className={styles.Link}
                activeClassName={styles.Active}
                aria-label="users page"
                to='/signup'>
                <i className="fa-solid fa-person-walking" /> Signup
        </NavLink>
        <NavLink
                className={styles.Link}
                activeClassName={styles.Active}
                aria-label="movies list"
                to='/movies'>
                <i className="fa-solid fa-person-walking" /> Movies
        </NavLink>
        <div><p>User: xxxx</p></div>
        <Navbar.Toggle
            className={styles.Toggle}
            aria-controls="basic-navbar-nav"
            aria-label="navbar toggle for mobile"
            ref={ref}
            onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-left">
                {/* <NavLink exact className={styles.Link} activeClassName={styles.Active} to='/'><i className="fa-brands fa-wpexplorer fa-lg"></i> Explore</NavLink> */}
                {/* {currentUser ? loggedIn : loggedOut} */}
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default NavBar