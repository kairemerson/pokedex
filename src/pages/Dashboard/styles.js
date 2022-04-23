import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const InputText = styled.input`
    margin: 20px 0;
    border-radius: 2rem;
    padding: 6px;
    padding-left: 10px;
    width: 40%;
    height: 30px;
    border: 1px solid #aaa;
`
export const Button = styled.button`
    background-color: #f24646;
    color: white;
    font-weight: bold;
    padding: 6px 20px;
    border-radius: 20px;
    height: 30px;
    margin-left: 10px;
    border: none;
    cursor: pointer;
    transition: .3s;
    &:hover{
        background-color: #fc6060;
    }
`