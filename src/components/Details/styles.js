import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: ${(props) => props.pokemon.types[0].type.name === "grass" ? "#47d1af" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "fire" ? "#fb6c6b" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "fighting" ? "#b64d19b3" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "poison" ? "#823ec3b3" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "water" ? "#145eabb3" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "flying" ? "#277ba1b3" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "bug" ? "#2f9651b3" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "normal" ? "#b1b1b1" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "electric" ? "#fed86d" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "ground" ? "#8a8331b3" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "fairy" ? "#ba65a0b3" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "rock" ? "#715c3db3" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "ghost" ? "#83417ab3" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "steel" ? "#6c6c6cb3" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "psychic" ? "#452a8db3" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "dragon" ? "#d57931" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "dark" ? "#232424b3" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "ice" ? "#659dba" : ""};
    background-color: ${(props) => props.pokemon.types[0].type.name === "shadow" ? "#414141" : ""};
    max-width: 300px;
    margin: 50px auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.75);
    box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.75);
    overflow: hidden;
`

export const WrapperDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 120px;
    gap: 20px;
    margin: 10px 0px;
    position: relative;
    p{
        color: white;
        font-size: 1.5rem;
    }
`
export const WrapperContent = styled.div`
    width: 100%;
    padding: 20px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: white;
    z-index: 1;
`
export const WrapperAbout = styled.div`
    display: inline-block;
    max-width: 100%;
    margin-bottom: 10px;
`
export const WrapperStats = styled.div`
    max-width: 100%;
    margin-top: 10px;
    p{
        font-weight: 600;
        margin-top: 6px;
    }
    span{
        margin-top: 6px;
    }
    `
export const StatsContent = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #bbb;
    
    
`
export const Image = styled.img`
    max-width: 45%;
    z-index: 1;
`
export const ImageLogo = styled.img`
    position: absolute;
    width: 70%;
    opacity: .3;
    right: -10px;
    transform: rotate(150deg);
`
export const Heading = styled.h2`
    margin: 14px 0 5px 0;
    color: white;
    position: relative;
    z-index: 1;
`
export const H3 = styled.h3`
    color: ${(props) => props.pokemon.types[0].type.name === "grass" ? "#47d1af" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "fire" ? "#fb6c6b" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "fighting" ? "#b64d19b3" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "poison" ? "#823ec3b3" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "water" ? "#145eabb3" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "flying" ? "#277ba1b3" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "bug" ? "#2f9651b3" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "normal" ? "#b1b1b1" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "electric" ? "#fed86d" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "ground" ? "#8a8331b3" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "fairy" ? "#ba65a0b3" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "rock" ? "#715c3db3" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "ghost" ? "#83417ab3" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "steel" ? "#6c6c6cb3" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "psychic" ? "#452a8db3" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "dragon" ? "#d57931" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "dark" ? "#232424b3" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "ice" ? "#659dba" : ""};
    color: ${(props) => props.pokemon.types[0].type.name === "shadow" ? "#414141" : ""};
    font-size: 1.5rem;
    margin-bottom: 8px;
`

