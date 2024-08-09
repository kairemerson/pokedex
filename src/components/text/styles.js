import styled, {css} from "styled-components";

export const Title = styled.p`
    ${({as})=> css`
        ${as === "h1" && css`
            font-size: 42px;
            color: black;
            background-color: #B71C1C;
        `}
        ${as === "p" && css`
            font-size: 14px;
            color: #666;
            text-align: center;
        `}
        
    `} 
`