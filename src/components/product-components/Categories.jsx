import React from 'react';
import { categories } from '../../stores/data';
import styled from 'styled-components';
import CategoriesItem from './CategoriesItem';
import { mobile } from '../../responsive';

const Container = styled.div`
    display: flex;
    padding: 20px;
    ${mobile({padding: "0px", flexDirection: "column"})}
`

const Categories = () => {
    return (
        <Container>
            {
                categories.map(item => (
                    <CategoriesItem item={item}></CategoriesItem>
                ))
            }
        </Container>
    )
}

export default Categories
