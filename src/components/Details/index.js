import * as S from "./styles"

function Details({pokemon}){
    return(
        
        <S.WrapperDetails>
            
            <img src={!pokemon ? pokemon : pokemon.sprites.front_default}/>
            <h2>{pokemon.name}</h2>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            {!pokemon && pokemon.types.map((type)=>{
                <p></p>
            })}
        </S.WrapperDetails>
    )
}

export default Details