import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useDispatch, useStore } from 'react-redux';
import { addToCartAction, removeFromCartAction, addToFavouriteAction, removeFromFavouriteAction } from "../../stores/product/product.action";
import { useSelector } from 'react-redux';
import { Favorite } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const Info = styled.div`
    opacity: 0;     
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0, 0,0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.7s ease;
`

const Container = styled.div`
    flex: 1;
    height: 350px;
    min-width: 280px;
    margin: 5px;
    display: flex;
    align-items: center;
    nustify-content: center;
    background-color: #f5fbfd;
    position: relative;
    justify-content: center;

    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 50%;
    position: absolute
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 1s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const ProductItem = ({item}) => {
    const dispatch = useDispatch();
    const cartItemsInStore = useSelector(state => state.productReducer.cartItems);
    const favouriteItemsInStore = useSelector(state => state.productReducer.favouriteItem);
    const [itemState, setItemState] = useState(false);
    const [favorite, setFavorite] = useState(null);

    const history = useHistory();

    useEffect(() => {
        cartItemsInStore.forEach(itm => {
            if(itm.id === item.id){
                setItemState(true)
            }
        })

        favouriteItemsInStore.forEach(itm => {
            if(itm.id === item.id){
                setFavorite(itm)
            }else{
                setFavorite(null)
            }
        })
    })

    const addToCart = (item) => {  
        const indx = cartItemsInStore.indexOf(item);

        if(indx === -1){
            dispatch(addToCartAction(item))
        }else {
            dispatch(removeFromCartAction(item))
        }

    }

    const addToFavourite = (item) => {   
        const indx = favouriteItemsInStore.indexOf(item);
        if(indx === -1){
            dispatch(addToFavouriteAction(item))
        }else {
            dispatch(removeFromFavouriteAction(item))
        }

    }

    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon onClick={() => addToCart(item)}>
                    {itemState ? <Badge badgeContent={cartItemsInStore.length} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge> :
                    <ShoppingCartOutlinedIcon /> }
                </Icon>
                 <Icon onClick={() => addToFavourite(item)}>
                    { !favorite ? <FavoriteBorderOutlinedIcon />: 
                    <Favorite />}
                </Icon>
                 <Icon onClick={() => history.push(`/product/${item.id}`)}>
                    <SearchOutlinedIcon />
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItem
