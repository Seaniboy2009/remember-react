import React, {useContext} from 'react'
import styles from '../styles/NavBar.module.css';
import Container from 'react-bootstrap/Container';
import useClickOutsideSelected from '../hooks/useClickOutsideArea.js';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import AuthContext from '../contexts/AuthContext'

const NavBar = () => {
    // Custom hook to get the signed in user
    let {user} = useContext(AuthContext)
    let {logoutuser} = useContext(AuthContext)

    const { expanded, setExpanded, ref } = useClickOutsideSelected();

    const signedIn = (
        <>
        <NavLink
            className={styles.Link}
            activeClassName={styles.Active}
            aria-label="movies list"
            to='/'
        >User: {user?.username}
        </NavLink>
        <Button onClick={logoutuser}>Sign out</Button>
        </>
    )

    const signedOut = (
        <>
        <NavLink
            className={styles.Link}
            activeClassName={styles.Active}
            aria-label="users page"
            to='/signup'
        >Sign Up
        </NavLink>
        <NavLink
            className={styles.Link}
            activeClassName={styles.Active}
            aria-label="movies list"
            to='/signin'
        >Sign In
        </NavLink>
        </>
    )

  return (
    <Navbar className={styles.NavBar} expand="md" fixed='top' expanded={expanded}>
    <Container>
        <NavLink className={styles.Brand} exact to='/'>Remember</NavLink>
        <NavLink
            className={styles.Link}
            activeClassName={styles.Active}
            aria-label="movies list"
            to='/movies'
        >Movies
        </NavLink>
        <NavLink
            className={styles.Link}
            activeClassName={styles.Active}
            aria-label="Test page"
            to='/test'
        >Search for movies
        </NavLink>
        <NavLink
            className={styles.Link}
            activeClassName={styles.Active}
            aria-label="Test page"
            to='/testtask'
        >Test Tasks
        </NavLink>
        {user ? signedIn : signedOut}
    </Container>
    </Navbar>
  )
}

export default NavBar