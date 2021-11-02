import styled from 'styled-components';
import { FaTimes } from "react-icons/fa";
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkRouter} from 'react-router-dom';

export const SidebarContainer = styled.aside`
 position:fixed;
 z-index:999;
 width: 100%;
 height: 100%;
 background: #081c15;
 display: grid;
 align-items: center;
 top:0;
 left: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
 top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
color:#39E991;
`

export const Icon = styled.div`
position:absolute;
top:1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
export const SidebarWrapper = styled.div `
 color:#fff;
`
export const SidebarMenu = styled.ul `
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4,80px);
text-align: center;
@media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);
}
`

export const SidebarLink = styled(LinkScroll) `
display:flex;
align-items:center;
justify-content:center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2 ease-in-out;
text-decoration : none;
color: #d8f3dc;
cursor:pointer;
&:hover {
    color:#40916c;
    transition: 0.2s ease-in-out;
}
`
export const SideBtnWrap = styled.div `
display:flex;
justify-content:center;
`

export const SidebarRoute = styled(LinkRouter)`
border-radius:50px;
background: #2d6a4f;
white-space:nowrap;
padding: 10px 22px;
color: #ffffff;
font-size: 24px;
outline: none;
border:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;
text-transform: uppercase;

&:hover {
    transition: all0.2s ease-in-out;
    background: #ffffff;
    color: #000000;
}
`


