import React from 'react';
import { popularProducts } from '../../stores/data'
import styled from 'styled-components';
import ProductItem from './ProductItem';

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
    return (
        <Container>
            {
                popularProducts.map(item => (
                    <ProductItem item={item} key={item.id}></ProductItem>
                ))
            }
        </Container>
    )
}

export default Products
