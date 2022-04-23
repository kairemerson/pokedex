import * as S from "./styles"

function Details({pokemon}){
    
    if(pokemon !== null){
        return(
            <S.WrapperDetails key={pokemon.id+pokemon.height}>
               
                <S.Image src={pokemon.sprites.other.dream_world.front_default}/>
                <S.Heading>{pokemon.name}</S.Heading>
                <p>#{pokemon.id}</p>
                <S.WrapperContent>
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Type: {pokemon.types.map((type)=>(
                        <span key={type.id}>{type.type.name } </span>
                        
                    ))}</p>
                    <p>Ability: {pokemon.abilities.map((ability)=>(
                        <span key={ability.id}>{ability.ability.name } </span>
                        
                    ))}</p>
                </S.WrapperContent>
            </S.WrapperDetails>
        )
        
    }
    return <></>
}

export default Details