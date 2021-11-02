import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {Logo, MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElemnts';
import { IconContext } from 'react-icons/lib';
import {FaBars} from 'react-icons/fa';
import logo from "../../images/anchor-logo.svg";


const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav= () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop()
  }
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    <Logo src={logo}/>
                </NavLogo>
                <MobileIcon onClick={toggle} >
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='technologies' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Technologies</NavLinks>
                  </NavItem>                                             
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='contact'>Contact us</NavBtnLink>
                </NavBtn>                    
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
    )
}

export default Navbar
