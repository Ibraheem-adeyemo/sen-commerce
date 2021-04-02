import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import { sliderItems } from "../stores/data";
import { mobile } from "../responsive";
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;

    ${mobile({height: "250px"})}
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transform: translateX(${props => props.slideIndx * -100}vw);
    transition: all 1.5s ease;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};
    ${mobile({height: "100%"})}
`
const Image = styled.img`
    height: 80%;
`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${mobile({padding: "0px"})}
`

const Title = styled.h1`
    font-size: 70px;
    ${mobile({fontSize: "20px"})}
`

const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${mobile({fontSize: "12px", letterSpacing: "1px"})}
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    ${mobile({padding: "5px", fontSize: "12px"})}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    opacity: 0.5;
    z-index: 50;
`

const Slider = () => {
    const [slideIndx, setSlideIndex] = useState(0);

    const handleSlide = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndx > 0? slideIndx - 1: 2);
        } else {
            setSlideIndex(slideIndx < 2? slideIndx + 1: 0)
        }
    }

    const history = useHistory();
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleSlide("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper slideIndx={slideIndx}>
                {sliderItems.map(item => {
                    return <Slide bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>
                                {item.desc}                            </Description>
                            <Button onClick={() => history.push("/product-list")}>BUY NOW</Button>
                        </InfoContainer>
                    </Slide> 
                
                })}             
            </Wrapper>
            <Arrow direction="right" onClick={() => handleSlide("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slider
