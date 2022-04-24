import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { selectCars } from "../features/car/carSlice";
import { useSelector} from 'react-redux';

function Header() {
    const [BurgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)

    return (
    <Components>
        <a href='/'>
            <img src="images/logo.svg" alt="" />
        </a>
        <Menu>
            {cars && cars.map((car,index) =>(
                <a key={index} href="/">{car}</a>
            ))}
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="/">Account</a>
            <CustomMenu onClick={()=> setBurgerStatus(true) } />
        </RightMenu>
        <BurgerNav show={BurgerStatus}>
            <CloseWrapper>
                <Close onClick={()=> setBurgerStatus(false) } />
            </CloseWrapper>
            {cars && cars.map((car,index) =>(
                <li><a key={index} href="#">{car}</a></li>
            ))}
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">New Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-In</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadstar</a></li>
        </BurgerNav>
    </Components>
  )
}

export default Header

const Components = styled.div`
    position: fixed;
    display: flex;
    padding: 0 20px;
    align-items: center;
    min-height: 60px;
    top: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
    z-index:10;
`
const Menu = styled.div`
    display:flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media (max-width:960px) {
        display:none;
    }
`
const RightMenu = styled.div`
    display:flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right:10px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position:fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    list-style: none;
    width: 300px;
    padding: 20px;
    z-index: 16;
    display:flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
    transition: all 0.5s ease-in-out;
    li{
        padding:15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        a{
            font-weight: 600;
        }
    }
`
const CloseWrapper= styled.div`
    display:flex;
    justify-content:right;
`
const Close = styled(CloseIcon)`
    cursor:pointer;
`
