import React from 'react';
import { Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavLinks,NavItem} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
const Navbar = (props) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    Gogreen kattike
                </NavLogo>
                <MobileIcon onClick={props.toggle}>
                    <FaBars/>
                </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact us</NavLinks>
                        </NavItem>
                    </NavMenu>
            </NavbarContainer>
        </Nav>
            
        </>
    )
}

export default Navbar
