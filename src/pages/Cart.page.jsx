import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black": "transparent"};
    color: ${props => props.type === "filled" && "white"};
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const TopTexts = styled.div`
    display: flex;
`
const TopText = styled.div`
    text-decoration: underline;
    margin: 0px 10px;
    cursor: pointer;
`
const Info = styled.div`
    flex: 3;
`
const Summary = styled.div`
    flex: 1;
    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    overflow: scroll;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    
    &::-webkit-scrollbar {
        display: none;
    }
`
const Product = styled.div`
    display: flex;
    align-items: center;
`
const ProductDetail = styled.div`
    display: flex;
    align-items: center;
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
`
const ProductName = styled.span`
    margin: 10px 0px;
`
const ProductSize = styled.span``
const ProductColor = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: black;
    margin: 10px 0px;
`
const ProductId = styled.span``
const Image = styled.img`
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.span`
    font-size; 24px;
    margin: 5px;
`
const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 300;
`
const Hr = styled.hr`
    background-color: #eee;
    height: 2px;
    border: none;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    display: flex;
    margin: 20px 0px;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' && "500"};
    font-size: ${props => props.type === 'total' && "24px"};
`
const SummaryItemText = styled.p``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    border: none;
`

const Cart = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Your Item</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Cart Items (2)</TopText>
                        <TopText>Whish Lists (2)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details >
                                    <ProductName><b>Product: </b>JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>Id: </b>9381379834</ProductId>
                                    <ProductColor />
                                    <ProductSize><b>Size: </b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details >
                                    <ProductName><b>Product: </b>JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>Id: </b>9381379834</ProductId>
                                    <ProductColor />
                                    <ProductSize><b>Size: </b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount</SummaryItemText>
                            <SummaryItemPrice>$ 5.80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart
