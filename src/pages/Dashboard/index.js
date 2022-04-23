import Text from "../../components/text"
import {useEffect, useState} from "react"
import api from "../../services/api"
import Card from "../../components/Card"
import * as S from "./styles"
import Details from "../../components/Details"


function Dashboard (){
    const [pokemon, setPokemon] = useState([])
    const [pokemonName, setPokemonName] = useState("")
    const [searchedPokemon, setSearchedPokemon] = useState(null)

    useEffect(()=>{
        async function getItems(){
            const {data} = await api.get("/pokemon")
            const resp = await Promise.all(data.results.map((item)=>api.get(item.url)))
            const format = resp.map((req)=>req.data)
            setPokemon(format)
        }
        

        getItems()
    }, [])
    const getPokemon = async() =>{
        if(pokemonName){
            const {data} = await api.get(`/pokemon/${pokemonName}`)
            setSearchedPokemon(data)
        }
    }
    return(
        <div>
            <Text as="h1">Pokedex</Text>
            <Text as="p">Localize o pokemon pelo nome ou clique em um pokemon da lista para exibir as informações</Text>
            <S.InputText type="text" 
                placeholder="Digite o nome do pokemon" 
                value={pokemonName} 
                onChange={(event)=>{setPokemonName(event.target.value)}}
                onBlur={()=>{getPokemon()}}/>
            <S.Button onClick={()=>getPokemon()}>Buscar</S.Button>
            <Details pokemon={searchedPokemon}/>
            <S.Wrapper>

                {pokemon.length > 0 && pokemon.map((item)=>(

                    <Card name={item.name} image={item.sprites.front_default} id={item.id}
                        stats={item.stats} key={item.id}
                    />
                   
                )
                    
                )}
            </S.Wrapper>
        </div>
    )
}

export default Dashboard