import styled from "styled-components";

export const Wrapper = styled.div`
    min-width: 150px;
    max-width: 300px;
    min-height: 250px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin: 6px;
    padding: 4px;
    border-radius: 20px;
    p{
        align-self: baseline;
        margin-left: 10px;
        margin-top: 6px;
    }
    
`
export const TitleStats = styled.span`
    background-image: linear-gradient(#f53527, blue);
    border: 1px solid #6e110a;
    max-width: 100px;
    padding: 2px 8px;

`