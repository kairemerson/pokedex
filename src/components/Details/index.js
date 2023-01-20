import * as S from "./styles"
import logo from "../../../src/logo.png"

function Details({pokemon}){
    
    if(pokemon !== null){
        return(
            <S.Wrapper pokemon={pokemon}>
                <S.WrapperDetails>
                    <S.ImageLogo src={logo}/>
                    <div>
                        <p>#{pokemon.id}</p>
                        <S.Heading>{pokemon.name}</S.Heading>
                    </div>
                    <S.Image src={pokemon.sprites.other.dream_world.front_default}/>
                </S.WrapperDetails>
                    
                    <S.WrapperContent>
                        <S.WrapperAbout>
                            <S.H3 pokemon={pokemon}>About</S.H3>
                            <p>Height: {pokemon.height}</p>
                            <p>Weight: {pokemon.weight}</p>
                            <p>Type: {pokemon.types.map((type)=>(
                                <span key={type.type.name}>{type.type.name } </span>
                                
                            ))}</p>
                            <p>Ability: {pokemon.abilities.map((ability)=>(
                                <span key={ability.ability.name}>{ability.ability.name } </span>
                                
                            ))}</p>

                        </S.WrapperAbout>
                        <S.WrapperStats >
                            <S.H3 pokemon={pokemon}>Stats</S.H3>
                            {pokemon.stats.map((stat)=>(
                                <S.StatsContent key={stat.stat.url} pokemon={pokemon}>
                                    <p >{stat.stat.name}: </p>
                                    <span>{stat.base_stat}</span>
                                </S.StatsContent>
                            ))}

                        </S.WrapperStats>
                    </S.WrapperContent>
            </S.Wrapper>
        )
        
    }
    return <></>
}

export default Details