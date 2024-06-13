import styled from "styled-components"
import { Fade } from "react-reveal"
function Section({title,desription,backgroundImage,leftButton,rightButton}) {
  return (
    <Wrap bgImage={backgroundImage}>
       <Fade top>
       <ItemText>
       
      <h1>{title}</h1>
        {desription &&  <p>{desription} </p>}
       
      </ItemText>
      </Fade>
      <Buttons>
      <Fade top>
        <ButtonGroup>
          <LeftButton>
           {leftButton}
          </LeftButton>
          {rightButton &&  <RightButton>
           {rightButton}
          </RightButton> }
        </ButtonGroup>
        </Fade>
        <Downrrow src="../../public/images/down-arrow (1).svg" alt="no image" />
       
      </Buttons>
    </Wrap>
  )
}

export default Section
const Wrap = styled.div`
width:100vw;
height:100vh;

background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:${props=>`url(${props.bgImage})`};
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
@media (max-width:768px) {
 p{
  padding-right:20px ;
 }
}
`

const ButtonGroup = styled.div`
display:flex;
flex-direction: column;
margin-bottom:30px;
@media  (max-width:768px){
  flex-direction: column;
}
`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
margin:8px;


`
const RightButton = styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;
`
const Downrrow = styled.img`
height:40px;
animation:animateDown infinite 1.5s;
`
const Buttons=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`