import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    const changeBackground = () => {
        if(window.scrollY > 56){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    

    return (
        <div>
            <Navbar expand="lg" className={scrolled ?'nav-bar active': 'nav-bar'}  fixed="top">
                <Container>
                <Navbar.Brand href="#home">
            <img
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-link' to="/">HOME</Link>
                            <Link className='nav-link' to="/">MENU</Link>
                            <Link className='nav-link' to="/">GALLERY</Link>
                            <Link className='nav-link' to="/">BLOG</Link>
                            <Link className='nav-link' to="/">CONTACT</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
