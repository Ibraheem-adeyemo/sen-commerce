import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    padding: 5px 10px;
    border: 1px solid grey;
    border-radius: 4px;
    outline: none
`

const FormInput = () => {
    return (
        <Input type='text' placeholder="search..." />
    )
}

export default FormInput
