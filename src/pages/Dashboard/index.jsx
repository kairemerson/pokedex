import Text from "../../components/text"
import {useEffect, useRef, useState} from "react"
import api, {getPokemons, getPokemonData} from "../../services/api"
import Card from "../../components/Card"
import * as S from "./styles"
import Details from "../../components/Details"


function Dashboard (){
    //const [pokemon, setPokemon] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokemonName, setPokemonName] = useState("")
    const [searchedPokemon, setSearchedPokemon] = useState(null)
    const [openMOdalDetails, setOpenModalDetails] = useState(false)
    const [limit, setLimit] = useState(50)
    const input = useRef()

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
        console.log("getitems", results);
        
    }
    useEffect(()=>{
        getItems()
    }, [])  

    const getPokemon = async() =>{
        if(pokemonName){
            const {data} = await api.get(`/pokemon/${pokemonName}`)
            setSearchedPokemon(data)
            openDetails(data)
            setOpenModalDetails(true)
            setPokemonName("")
        }
    }
    const loadMore = () => {
        let nextLimit = limit + 50
        setLimit(nextLimit)
        getItems(nextLimit)
    }
    const openDetails = (pokemon)=>{
        setSearchedPokemon(pokemon)
        // input.current.focus()
    }
    const changeOpenDetails = () =>{
        setOpenModalDetails(!openMOdalDetails)

    }

    return(
        <div>
            
            <Text as="p">Localize o pokemon pelo nome ou clique em um pokemon da lista para exibir as informações dele.</Text>
            <S.Header>
                <S.InputText type="text" 
                    placeholder="Digite o nome do pokemon" 
                    value={pokemonName} 
                    onChange={(event)=>{setPokemonName(event.target.value)}}
                    onBlur={()=>{getPokemon()}}
                    ref={input}/>
                <S.Button onClick={()=>getPokemon()}>Buscar</S.Button>

            </S.Header>
            {openMOdalDetails ? (
                <Details pokemon={searchedPokemon} openDetails={openDetails} changeOpenDetails={changeOpenDetails}/>

            ) : (

                <S.Wrapper>

                    {pokemons.length > 0 && pokemons.map((item)=>(
                        
                        <Card name={item.name} image={item.sprites.other.showdown.front_default} id={item.id}
                            stats={item.stats} key={item.id} types={item.types} pokemon={item} 
                            changeOpenDetails={changeOpenDetails} openDetails={openDetails}
                        />
                    
                    )
                        
                    )}
                </S.Wrapper>
            )}
            {!openMOdalDetails && <S.Button onClick={() => loadMore()}>CARREGAR MAIS</S.Button>}
                
        </div>
    )
}

export default Dashboard