import React from 'react'
import { TechnologiesCard, TechnologiesContainer, TechnologiesHeader, TechnologiesIcon, TechnologiesSecondHeader, TechnologiesWrapper } from './TechnologiesElements'
import technologies from './Data';

const Technologies = () => {
    return (
        <TechnologiesContainer id="technologies">
            <TechnologiesHeader>Web Development Technologies</TechnologiesHeader>
            <TechnologiesWrapper>
            { technologies.map(({id, h1, img, alt}) => (
                <TechnologiesCard key={id}>
                    <TechnologiesIcon src={img} alt={alt}/>
                    <TechnologiesSecondHeader>{h1}</TechnologiesSecondHeader>
                </TechnologiesCard>
                ))}
            </TechnologiesWrapper>
        </TechnologiesContainer>
    )
}

export default Technologies
