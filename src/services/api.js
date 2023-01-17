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

export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export default api