import styled from "styled-components"
import Section from "./Section"
function Home() {
  return (
    <Container>
     
        <Section 
        title="Model S "
        desription="Eligible buyers qualify for a $7,500 federal tax credit. Applied at time of Model Y delivery. See Details Shop Available"
        backgroundImage="../../public/images/model-s.jpg"
        leftButton="CUSTOM ORDER"
        rightButton="EXISTING INVENTORY"
        />
        <Section 
        title="Model 3 "
        desription="Lease starting at $329/mo*"
        backgroundImage="../../public/images/model-3.jpg"
        leftButton="CUSTOM ORDER"
        rightButton="EXISTING INVENTORY"
      
        />
        <Section 
        title="Model X"
        desription="From $68,590*
        After Federal Tax Credit & Est. Gas Savings"
        backgroundImage="../../public/images/model-x.jpg"
        leftButton="CUSTOM ORDER"
        rightButton="EXISTING INVENTORY" />   
        <Section 
          title="Solar Panels"
          desription="Schedule a Virtual Consultation"
          backgroundImage="../../public/images/solar-panel.jpg"
          leftButton="CUSTOM ORDER"
          rightButton="EXISTING INVENTORY"
        />
        <Section 
          title="Accessories"
          backgroundImage="../../public/images/accessories.jpg"
          leftButton="Shop Know"
        />
    </Container>
  )
}

export default Home

const Container=styled.div`
height:100vh;

`