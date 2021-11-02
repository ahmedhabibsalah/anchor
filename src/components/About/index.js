import React from 'react'
import { FirstColumn, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, SecondColumn, Subtitle, TextWrapper, TopLine } from './AboutElements';

const About = ({lightBg, id, topLine, lightText, darkText, headLine, descriptionLineOne, alt, img, imgStart, descriptionLineTwo, descriptionLineThree, descriptionLineFour }) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id={id} >
               <InfoWrapper>
                   <InfoRow imgStart={imgStart}>
                       <FirstColumn imgStart={imgStart}>
                           <TextWrapper>
                               <TopLine>{topLine}</TopLine>
                               <Heading lightText={lightText}>{headLine}</Heading>
                               <Subtitle darkText={darkText}>{descriptionLineOne} </Subtitle>
                               <Subtitle darkText={darkText}>{descriptionLineTwo} </Subtitle>
                               <Subtitle darkText={darkText}>{descriptionLineThree} </Subtitle>
                               <Subtitle darkText={darkText}>{descriptionLineFour} </Subtitle>
                           </TextWrapper>
                       </FirstColumn>
                       <SecondColumn>
                           <ImgWrap>
                             <Img src={img} alt={alt} />
                           </ImgWrap>
                   </SecondColumn>
                   </InfoRow>   
                </InfoWrapper>   
            </InfoContainer> 
        </>
    )
}

export default About;
