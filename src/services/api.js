import axios from "axios"

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export const getPokemon = async(pokemonName) =>{
    if(pokemonName){
        const {data} = await api.get(`/pokemon/${pokemonName}`)
        return await data
    }
}

export default api