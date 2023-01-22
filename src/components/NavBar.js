import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/twitter.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/discord.svg';
import navIcon4 from '../assets/img/youtube.svg';
import { HashLink } from 'react-router-hash-link';

import headerImg from "../assets/img/revo-header.png";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <img src={headerImg} alt="Header Img"/> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="https://blog.0xrevo.my.id" target="_blank" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blog')}>Blog</Nav.Link>          
              <Nav.Link href="https://jumper.0xrevo.my.id" target="_blank" className={activeLink === 'jumper' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stake')}>Jumper</Nav.Link>                            
              <Nav.Link href="#testnet" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Testnet</Nav.Link> 
              <Nav.Link href="#team" className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('team')}>Team</Nav.Link>

            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://discordapp.com/users/758688021586772000" target="_blank"><img src={navIcon3} alt="Discord" /></a>
                <a href="https://github.com/0xrevo/testnet-guide"target="_blank"><img src={navIcon2} alt="Github" /></a>
                <a href="https://twitter.com/0xRevo" target="_blank"><img src={navIcon1} alt="Twitter" /></a>
                <a href="https://youtube.com" target="_blank"><img src={navIcon4} alt="Youtube" /></a>
                </div>
                </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
