import React, { useState } from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Droping from './Droping';
import { useLocation, useHistory } from 'react-router-dom'
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const NavContainer = styled.div`
    background: black;
    color: white;
    padding: 10px 20px;
    display: flex;
    width: 100vw;
    ${mobile({ height: "50px", padding: "10px 0px"})}
`
const Left = styled.div`
    padding: 5px;
    flex: 1;
    display: flex;
    align-items: center
`
const SeachDiv = styled.div`
    border: 0.5px solid white;
    border-radius: 4px;
    margin-left: 10px;
    ${mobile({display: "flex", alignItems: "center"})}
`
const Logo = styled.div`
    font-weight: bold;
    cursor: pointer;
    ${mobile({fontSize: '14px'})}
`
const Input = styled.input`
    padding: 5px 10px;
    border: none;
    outline: none;
    background-color: transparent;
    ${mobile({width: "100px", padding: "5px 0px"})}
`

const Center = styled.div`
    padding: 5px;
    flex: 1;
    margin: auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Right = styled.div`
    padding: 5px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    position: relative;
    ${mobile({justifyContent: "center", flex: 2})}
`
const RightItemTopContainer = styled.div`
    display: flex;
    padding: 5px;
    align-items: center;
`
const RightItemBottomContainer = styled.div`
    position: absolute;
    top: 40px;
    z-index: 2;
    background-color: black;
    display: none;
`

const MenuItem = styled.div`
    font-size: 12px;
    cursor: pointer;
    margin-right: 20px;

    &:hover {
        color: lightgray;
    }
    ${mobile({fontSize: "12px", width: "35px", flex: 2})}
`
const MenuItemHover = styled.div`
    font-size: 12px;
    cursor: pointer;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`


const Navbar = () => {
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const location = useLocation();
    const pageArr = ["/signup", "/login"];

    const indx = pageArr.indexOf(location.pathname);

    const history = useHistory();

    const cartItems = useSelector((state) => state.productReducer.cartItems);
    const favouriteItemsInStore = useSelector(state => state.productReducer.favouriteItem);

    if(indx !== -1 ){
        return null
    }
    return (
        <NavContainer>
            <Left>
                <Language>EN</Language>
                <SeachDiv >
                    <Input placeholder='Search...' />
                    <SearchIcon style={{color: 'light-grey', fontSize: 17, cursor: 'pointer'}} />
                </SeachDiv>
            </Left>
            <Center>
                <Logo onClick={()=>history.push("/")}>SENCOMM.</Logo>
            </Center>
            <Right>
                <RightItemTopContainer>
                    {/* {!isAuthenticated && <MenuItem>REGISTER</MenuItem>} */}
                    {!isAuthenticated && <MenuItem>SIGN IN</MenuItem>}
                    {!isAuthenticated && <MenuItemHover>PROFILE</MenuItemHover>}
                    <MenuItem onClick={() => history.push("/cart")}>
                        <Badge badgeContent={cartItems.length} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={favouriteItemsInStore.length} color="secondary">
                            <FavoriteBorderOutlinedIcon /> 
                        </Badge>
                    </MenuItem>
                </RightItemTopContainer>
                <RightItemBottomContainer>
                    <Droping />
                </RightItemBottomContainer>
            </Right>
        </NavContainer>
    )
}

export default Navbar
