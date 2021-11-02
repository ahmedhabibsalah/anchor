import React from 'react'
import {  Bio, Container, Content, Heading,  HeroBtnRouteContact, HeroBtnRouteLearn, HeroBtnWrap, Section} from './HeroElements';
import  {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, {EffectCoverflow,Pagination,Autoplay } from 'swiper';
import "./styles.css";
import projects from "./images"

  SwiperCore.use([EffectCoverflow,Pagination,Autoplay]);



const Hero = () => {
    return (
        <Section >
            <Content>
                <Heading>
                  If you can think it, We can web it.
                </Heading>
                <Bio> 
                 Anchor Take care of your technology management functions so, that you can focus on your core business.                        
                </Bio>
                <HeroBtnWrap>
                    <HeroBtnRouteLearn to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}> Learn More </HeroBtnRouteLearn>
                    <HeroBtnRouteContact to="/contact" > Contact US </HeroBtnRouteContact>
                </HeroBtnWrap>
            </Content>
            <Container>

            
            <Swiper 
            effect={'coverflow'} 
            grabCursor={true} 
            centeredSlides={true} 
            slidesPerView={'auto'} 
            coverflowEffect={{
                "rotate": 0,
                "stretch": 0,
                "depth": 100,
                "modifier": 2,
                "slideShadows": true,
            }} 
            loop={true} 
            autoplay={{
                "delay":2000,
                "disableOnInteraction": false,
            }}
            // pagination={true}
            className="mySwiper image-slider">
                {projects.map(({ id, photo, alt }) => (
                  <SwiperSlide><img key={photo.id} src={photo} alt={alt}  /></SwiperSlide>
      ))}
                

                </Swiper>
                </Container>
                
        </Section>
    )
}

export default Hero
