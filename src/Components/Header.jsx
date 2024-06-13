import styled from "styled-components"
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header() {
  const [burgerOpen,setBurgerOpen]=useState(false)
  return (
    <Container>
      <a href="">
        <img src="../../public/images/logo (1).svg" alt="" />
      </a>
      <Menu>
        <a href="">Model S</a>
        <a href="">Model X</a>
        <a href="">Model Y</a>
        <a href="">Model 3</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <MenuIcon onClick={()=>{setBurgerOpen(true)}} />
      </RightMenu>
      <BurgerNav show={burgerOpen}>
        <CloseWrapper>
          <CustomClose onClick={()=>{setBurgerOpen(false)}} />
        </CloseWrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">TradeIn</a></li>
        <li><a href="#"> CyberTruck</a></li>
        <li><a href="#">Roadmaster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
      </BurgerNav>
     
    </Container>
  )
}

export default Header

const Container=styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    @media (max-width:768px) {
        display: none;
    }
   
    a{
        font-weight: 600;
        text-transform:uppercase ;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
   
`
const RightMenu=styled.div`
display: flex;
align-items: center;
 a{
        font-weight: 600;
        text-transform:uppercase ;
        margin-right:10px;
        
    }
`
const CustomMenu=styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav=styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right:0 ;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding:20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: ${props=>props.show?'translateX(0)':'translateX(100%)'};
  transition: transform 0.2s ease-in;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    a{
      cursor: pointer;
      font-weight: 600;
    }
  }
`
const CustomClose=styled(CloseIcon)`
   cursor: pointer;
`
const CloseWrapper=styled.div`
display: flex;
justify-content: flex-end;

`
