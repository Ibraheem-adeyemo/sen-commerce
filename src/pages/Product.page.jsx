import { Add, Remove } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Newsletter from '../components/product-components/NewsLetter';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProductAction } from '../stores/product/product.action';
import { addToCartAction, removeFromCartAction } from "../stores/product/product.action";


const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
`
const FilterContainer = styled.div`
    width: 70%;
    display: flex;
    margin: 30px 0px;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`

`
const FilterSizeOption = styled.option`

`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Button = styled.button`
    padding: 10px;
    border: 2px solid teal;
    cursor: pointer;
    background-color: white;
    font-weight: 500;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const AddContainer = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Product = () => {
    const product = useSelector(state => state.productReducer.product); 
    const cartItemsInStore = useSelector(state => state.productReducer.cartItems);

    const [ctItm, setctItm] = useState(1)
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        const pathId = location.pathname.split("/").pop()
        dispatch(getSingleProductAction(pathId));
    }, [])
    
    const indx = cartItemsInStore.indexOf(product);

    const addToCart = (item) => {  
        if(indx === -1){
            dispatch(addToCartAction(item))
        }else {
            dispatch(removeFromCartAction(item))
        }

    }

    const increase = (cond) => {
        if(cond === "increase"){
            setctItm(sta => sta + 1)
        } else {
            setctItm(sta => sta - 1)
        }
    }

    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src={product && product.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{product && product.title}</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur, natus beatae, totam impedit laborum similique, nesciunt magnam esse commodi illo ipsa tempora vitae explicabo corrupti. Nisi iste consectetur error!</Desc>
                    <Price>$ {product && product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {
                                product && product.color.map((itm, i) => {
                                    return <FilterColor color={itm}  key={i} />
                                })
                            }
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        {indx > -1 && <AmountContainer>
                            {ctItm > 0 && <Remove onClick={() => increase('decrease')} />}
                            <Amount>{indx > -1 ? ctItm : 0}</Amount>
                            <Add onClick={() => increase('increase')} />
                        </AmountContainer>}
                        <Button onClick={() => addToCart(product)} disabled={indx !== -1}>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
        </Container>
    )
}

export default Product;
