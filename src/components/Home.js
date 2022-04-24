import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
            title= "Model 3"
            description="Order Online For Touchless Delivery"
            topbtntext= "custom order"
            botbtntext= "existing inventory"
            backgroundimg= "/images/model-3.jpg"
            arrow="images/down-arrow.svg"
            />
            <Section 
                title= "Model Y"
                description="Order Online For Touchless Delivery"
                topbtntext= "custom order"
                botbtntext= "existing inventory"
                backgroundimg= "images/model-y.jpg"
            />
        <Section 
            title= "Model S"
            description="Order Online For Touchless Delivery"
            topbtntext= "custom order"
            botbtntext= "existing inventory"
            backgroundimg= "images/model-s.jpg"
            />
        <Section 
            title= "Model X"
            description="Order Online For Touchless Delivery"
            topbtntext= "custom order"
            botbtntext= "existing inventory"
            backgroundimg= "images/model-x.jpg"
            />
        <Section 
            title= "Solar Panels"
            description="Lowest Cost Solar Panels in America"
            topbtntext= "order now"
            botbtntext= "Learn More"
            backgroundimg= "images/solar-panel.jpg"
            />
        <Section 
            title= "Solar Roof"
            description="Produce Clean Energy From Your Roof"
            topbtntext= "order now"
            botbtntext= "Learn More"
            backgroundimg= "images/solar-roof.jpg"
            />
        <Section 
            title= "Accessories"
            topbtntext= "shop now"
            backgroundimg= "images/accessories.jpg"
        />
        
    </Container>
  )
}

export default Home
const Container = styled.div`
    height: 100vh;
`