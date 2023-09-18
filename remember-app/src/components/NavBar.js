import React from 'react'
import styles from '../styles/NavBar.module.css';
import Container from 'react-bootstrap/Container';
import useClickOutsideSelected from '../hooks/useClickOutsideArea.js';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';

const NavBar = () => {
    // Custom hook to get the signed in user
    const currentUser = useCurrentUser()
    const setCurrentUser = useSetCurrentUser()

    const { expanded, setExpanded, ref } = useClickOutsideSelected();

    const handleSignOut = async () => {
        try {
            await axios.post('/dj-rest-auth/logout/');
            setCurrentUser(null);
        } catch (error) {
            
        }
    };

    const checkToken = async () => {
        try {
            console.log('Check Token')
            const { data } = await axios.post('/dj-rest-auth/token/refresh/')
            console.log(`Token ${data}`)
        } catch (error) {
            
        }
    }

    const checkUser = async () => {
        try {
            console.log('Check User')
            const { data } = await axios.get('/dj-rest-auth/user/')
            console.log('User')
            console.log(data)
        } catch (error) {
            
        }
    }

    const signedIn = (
        <>
        <NavLink
            className={styles.Link}
            activeClassName={styles.Active}
            aria-label="movies list"
            to='/'
        >User: {currentUser?.username}
        </NavLink>
        <Button onClick={handleSignOut}>Sign out</Button>
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
        {currentUser ? signedIn : signedOut}
        {/* <Button onClick={checkToken}>Check token</Button> */}
        {/* <Button onClick={checkUser}>Check User</Button> */}
        {/* <Navbar.Toggle
            className={styles.Toggle}
            aria-controls="basic-navbar-nav"
            aria-label="navbar toggle for mobile"
            ref={ref}
            onClick={() => setExpanded(!expanded)}
        /> */}
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