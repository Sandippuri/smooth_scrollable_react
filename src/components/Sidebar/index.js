import React from 'react';
import { SidebarContainer,Icon,CloseIcon ,SidebarWrapper,SidebarLink,SidebarMenu} from './SidebarElements';

const Sidebar = (props) => {
    return (
        <>
        <SidebarContainer isOpen = {props.isOpen} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
            <CloseIcon/>    
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={props.toggle}>Home</SidebarLink>
                    <SidebarLink to="services" onClick={props.toggle}>Services</SidebarLink>
                    <SidebarLink to="about" onClick={props.toggle}>About</SidebarLink>
                    <SidebarLink to="contact" onClick={props.toggle}>Contact Us</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
            
        </>
    )
}

export default Sidebar
