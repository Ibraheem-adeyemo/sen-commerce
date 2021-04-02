import React from 'react';
import styled from 'styled-components';
import { NavLink  } from 'react-router-dom';

const Container = styled.div`
    
`
const ListContainer = styled.ul`
    margin-right: 20px;
`
const ListItem = styled.li`
    list-style-type: none;
    margin: 10px 0px;

    &:a {
        color: white;
    }
`

const Droping = () => {
    return (
        <Container>
            <ListContainer>
                <ListItem>                
                    <NavLink to="/">Creat Product</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/">View Profile</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/">Order Details</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to="/">Log out</NavLink>
                </ListItem>
            </ListContainer>
        </Container>
    )
}

export default Droping
