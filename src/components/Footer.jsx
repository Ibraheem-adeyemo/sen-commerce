import { EmailOutlined, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { mobile, mobileLandscape } from '../responsive';    

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})};
    ${mobileLandscape({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Logo = styled.h1`
    font-weight: bold
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color };
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 5px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    const location = useLocation();
    const pageArr = ["/signup", "/login"];

    const indx = pageArr.indexOf(location.pathname);
    if(indx !== -1 ){
        return null
    }
    return (
        <Container>
            <Left>
                <Logo>SENCOMMERCE.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem dolorum eligendi veritatis culpa officia fuga, natus excepturi sit harum alias quisquam perferendis, consequuntur mollitia provident vitae quam non totam reprehenderit.</Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>

                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight: "10px"}} /> No 9, Aminu Street Mende Maryland Lagos Nigeria</ContactItem>
                <ContactItem><Phone /> +234-70-35853137</ContactItem>
                <ContactItem><EmailOutlined /> aderemiibrahim11@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
