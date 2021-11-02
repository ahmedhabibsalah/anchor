import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                      About
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                      Services
                    </SidebarLink>
                    <SidebarLink to="technologies" onClick={toggle}>
                      Technologies
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap >
                  <SidebarRoute to="/contact" onClick={toggle}>Contact us</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
