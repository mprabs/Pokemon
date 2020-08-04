import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './helper/header';
// import axios from 'axios';
import LOCAL_POKEMON_DATA from './config';


export default function PokemonDetails() {
    const { slug } = useParams();

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        getData();
        async function getData () {
            const result = await JSON.parse(localStorage.getItem(LOCAL_POKEMON_DATA + `${slug}`));
            setPokemon(result);
        }
    }, [slug])
    return (
        <div>
            <Header />
            <div class="container">
                {console.log(pokemon)}
                <div class="row">
                    <div>
                        <h1> {pokemon.name} </h1>
                        <h1> {JSON.stringify(pokemon.sprites)} </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
