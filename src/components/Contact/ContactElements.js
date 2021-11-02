import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.div `
min-height: 750px;
bottom: 0;
left: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: #071610;
`
export const FormWrap = styled.div `
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;


@media screen and (max-width: 400px) {
    height: 80%
}
`

export const LogoWrap = styled(Link) `
cursor: pointer;
max-width: 180px;
margin-left: 32px;
` 
export const Logo =styled.img  `
height:200px;
width:180px;
`