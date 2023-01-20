import Text from "../../components/text"
import {useEffect, useState} from "react"
import api, {getPokemons, getPokemonData} from "../../services/api"
import Card from "../../components/Card"
import * as S from "./styles"
import Details from "../../components/Details"


function Dashboard (){
    //const [pokemon, setPokemon] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokemonName, setPokemonName] = useState("")
    const [searchedPokemon, setSearchedPokemon] = useState(null)
    const [limit, setLimit] = useState(50)

    async function getItems(limit){
        // const {data} = await api.get("/pokemon")
        // const resp = await Promise.all(data.results.map((item)=>api.get(item.url)))
        // const format = resp.map((req)=>req.data)
        //setPokemon(format)
        const dados = await getPokemons(limit)
        const promises = dados.results.map(async (pokemon)=>{
            return await getPokemonData(pokemon.url)
        })
        const results = await Promise.all(promises)
        setPokemons(results)
    }
    useEffect(()=>{
        getItems()
    }, [])
    console.log(pokemons);

    const getPokemon = async() =>{
        if(pokemonName){
            const {data} = await api.get(`/pokemon/${pokemonName}`)
            setSearchedPokemon(data)
            setPokemonName("")
        }
    }
    const loadMore = () => {
        let nextLimit = limit + 50
        setLimit(nextLimit)
        getItems(nextLimit)
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

                {pokemons.length > 0 && pokemons.map((item)=>(
                    
                    <Card name={item.name} image={item.sprites.front_default} id={item.id}
                        stats={item.stats} key={item.id} types={item.types}
                    />
                   
                )
                    
                )}
            </S.Wrapper>
                <S.Button onClick={() => loadMore()}>CARREGAR MAIS</S.Button>
        </div>
    )
}

export default Dashboard