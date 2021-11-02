import React from 'react'
import { ServicesCard, ServicesContainer, ServicesHeading, ServicesIcon, ServicesParagraph, ServicesSecondHeader, ServicesWrapper } from './ServicesElements'
import services from './Data'

const Services = () => {
    return (  
         <ServicesContainer  id="services"> 
            <ServicesHeading> Our Services</ServicesHeading>
            <ServicesWrapper >
                {services.map(({id, h1, img, alt, p}) => (
                  <ServicesCard key={id}>
                    <ServicesIcon src={img} alt={alt} />
                    <ServicesSecondHeader>{h1}</ServicesSecondHeader>
                    <ServicesParagraph>{p}</ServicesParagraph>
                  </ServicesCard>        
                ))}
            </ServicesWrapper>
         </ServicesContainer>
    )
}

export default Services
