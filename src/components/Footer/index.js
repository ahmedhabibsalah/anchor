import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterElement, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, Logo, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import logo from "../../images/anchor-logo.svg";
import {FaFacebook, FaLinkedin} from 'react-icons/fa';



const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
      }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                              Follow Us
                            </FooterLinkTitle>
                            <FooterLink href="//www.facebook.com/Anchor-107567225045368" target="_blank" aria-label="Facebook">Facebook</FooterLink>
                            <FooterLink href="//www.linkedin.com/company/anchor-for-digital-services" target="_blank" aria-label="Linkedin">LinkedIn</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                              Our Services
                            </FooterLinkTitle>
                            <FooterElement>Product Design</FooterElement>
                            <FooterElement>Web Development</FooterElement>
                            <FooterElement>Digital Marketing</FooterElement>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLinkTitle>
                              Address
                            </FooterLinkTitle>
                            <FooterElement>Port Said, Egypt</FooterElement>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                              Contact
                            </FooterLinkTitle>
                            <FooterElement>+201069236931</FooterElement>
                            <FooterElement>anchor.media.services@gmail.com</FooterElement>   
                        </FooterLinkItems>
                        
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}><Logo src={logo}/></SocialLogo>
                        <WebsiteRights>Anchor © {new Date().getFullYear()} All right reserved. </WebsiteRights>
                    
                    <SocialIcons>
                        <SocialIconLink href="//www.facebook.com/Anchor-107567225045368" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="//www.linkedin.com/company/anchor-for-digital-services" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
