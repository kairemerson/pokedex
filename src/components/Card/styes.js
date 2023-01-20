import styled from "styled-components";

export const Wrapper = styled.div`
    min-width: 150px;
    max-width: 300px;
    min-height: 200px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin: 6px;
    padding: 4px;
    border-radius: 20px;
    &>p{
        align-self: baseline;
        margin-left: 10px;
        margin-top: 6px;
    }
    
`
export const WrapperCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;
    gap: 4px;
`
export const StatsHp = styled.p`
    background-image: linear-gradient(90deg, #f2807e, #fa5855);
    width: 48%;
    padding: 2px 8px;
    border-radius: 8px;
`
export const TypesSpan = styled.span`
   background-color: ${(props) => props.types === "grass" ? "#47d1af" : ""};
   background-color: ${(props) => props.types === "fire" ? "#fb6c6b" : ""};
   background-color: ${(props) => props.types === "fighting" ? "#b64d19b3" : ""};
   background-color: ${(props) => props.types === "poison" ? "#823ec3b3" : ""};
   background-color: ${(props) => props.types === "water" ? "#145eabb3" : ""};
   background-color: ${(props) => props.types === "flying" ? "#277ba1b3" : ""};
   background-color: ${(props) => props.types === "bug" ? "#2f9651b3" : ""};
   background-color: ${(props) => props.types === "normal" ? "#b1b1b1" : ""};
   background-color: ${(props) => props.types === "electric" ? "#fed86d" : ""};
   background-color: ${(props) => props.types === "ground" ? "#8a8331b3" : ""};
   background-color: ${(props) => props.types === "fairy" ? "#ba65a0b3" : ""};
   background-color: ${(props) => props.types === "rock" ? "#715c3db3" : ""};
   background-color: ${(props) => props.types === "ghost" ? "#83417ab3" : ""};
   background-color: ${(props) => props.types === "steel" ? "#6c6c6cb3" : ""};
   background-color: ${(props) => props.types === "psychic" ? "#452a8db3" : ""};
   background-color: ${(props) => props.types === "dragon" ? "#d57931" : ""};
   background-color: ${(props) => props.types === "dark" ? "#232424b3" : ""};
   background-color: ${(props) => props.types === "ice" ? "#659dba" : ""};
   background-color: ${(props) => props.types === "shadow" ? "#414141" : ""};
   padding: .5px 8px;
   border-radius: 8px;
`

