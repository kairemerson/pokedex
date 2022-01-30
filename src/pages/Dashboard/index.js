import Text from "../../components/text"
import {useEffect, useState} from "react"
import api from "../../services/api"
import Card from "../../components/Card"
import * as S from "./styles"


function Dashboard (){
    const [pokemon, setPokemon] = useState([])

    useEffect(()=>{
        async function getItems(){
            const {data} = await api.get("/pokemon")
            const resp = await Promise.all(data.results.map((item)=>api.get(item.url)))
            const format = resp.map((req)=>req.data)
            setPokemon(format)
            console.log(format, "data",data);
        }
        

        getItems()
    }, [])
    return(
        <div>
            <Text as="h1">Pokedex</Text>
            <Text as="p">Search for Pokemóm by name or using the National Pokedex number</Text>
            <S.Wrapper>

                {pokemon.length > 0 && pokemon.map((item)=>(

                    <Card name={item.name} image={item.sprites.front_default} id={item.id}
                        stats={item.stats}
                    />
                   
                )
                    
                )}
            </S.Wrapper>
        </div>
    )
}

export default Dashboard