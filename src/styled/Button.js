import styled from "styled-components"
export const Button = styled.button`


    padding: 10px 18px;

    color: white;
    min-width: 220px;
    background: #000000;
    border-radius: 5px;
    border: none;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover{
        background-color: #f7f5f5;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
        cursor: pointer;
    }

    
    `

export const OutlineButton = styled(Button)`

        border: 1px solid black;
background-color: white;
color: black;

&:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
        cursor: pointer;
    }


`