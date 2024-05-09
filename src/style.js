import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    z-index: 100;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    padding: 30px 0;
    button {
        width: 70px;
        height: 30px;
        background: white;
        border: none;
        border-radius: 5px;
        opacity: 0.8;
        cursor: pointer;
    }
    input {
        height: 30px;
        border: none;
        border-radius: 5px;
        padding: 0 10px;
        width: 300px;
    }
`
export const Box = styled.div`
    height: 400px;
    width: 500px;
    background: white;
    opacity: 0.5;
    border-radius: 20px;
`

export const MapDiv = styled.div`
    width: 380px;
    background: white;
    min-height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 10px;
`

export const Buttons = styled.button`
    height: 30px;
    width: ${(props) => props.$edit ? "50px" : "80px"};
    background: ${(props) => props.$edit ? "green" : "blue"};
    color: white;
`