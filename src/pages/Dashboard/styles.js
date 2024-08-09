import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const Header = styled.div`
    text-align: center;
`
export const InputText = styled.input`
    margin: 12px 0;
    margin-left: auto;
    border-radius: 2rem;
    padding: 6px;
    padding-left: 10px;
    width: 50%;
    height: 45px;
    border: 1px solid #dee;
`
export const Button = styled.button`
    background-color: #f24646;
    color: white;
    font-weight: bold;
    padding: 6px 30px;
    border-radius: 20px;
    height: 40px;
    margin-left: 10px;
    border: none;
    cursor: pointer;
    transition: .3s;
    &:hover{
        background-color: #fc6060;
    }
`