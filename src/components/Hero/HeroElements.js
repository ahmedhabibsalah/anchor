import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';


export const Section = styled.section `
padding:3rem 9%;
background: #071610;
  min-height: 100vh;
  text-align: center;
`

export const Content = styled.div `
padding-top: 6.5rem;
  max-width:70rem;
  margin:0 auto;
`
export const Heading = styled.h3 `
  font-size: 2.5rem;
  color:#ffffff;
  text-transform: uppercase;

`
export const Bio = styled.p `
 font-size: 1.3rem;
  color:#ffffff;
  padding:1rem 0;
  
  `

export const HeroBtnWrap = styled.div `
display:flex;
justify-content:center;
`
export const HeroBtnRouteLearn =styled(LinkScroll)`
border-radius:10px;
background: #2d6a4f;
white-space:nowrap;
padding: 10px 22px;
color: #ffffff;
font-size: 24px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;
margin-right:20px;

&:hover {
    transform:scale(1.1);

}
`
export const HeroBtnRouteContact = styled(LinkRouter) `
border-radius:10px;
background: #ffffff;
white-space:nowrap;
padding: 10px 22px;
color: #2d6a4f;
font-size: 24px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;


&:hover {
    transform:scale(1.1);
}
`
export const Container = styled.div`
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 5rem;
`
