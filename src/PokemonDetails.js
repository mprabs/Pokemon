import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './helper/header';
import LOCAL_POKEMON_DATA from './config';
import './app.css';
import Gallery from './helper/gallery';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
    console.log(pokemon)
    return (
        <div>
            <Header back={true} onBack={() => window.history.back()} />
            <div className="container jumbotron">
                    <div className="row">
                        <div className="col-md-9">
                            <ul class="list-group">
                                <p class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                <div class="image-parent">
                                    {pokemon.sprites && <img src={pokemon.sprites.other.dream_world.front_default} class="img-fluid" alt="quixote" />}
                                </div>
                                <div className="col-md-2">
                                    <h4 className="pokemon__title"> {pokemon.name && pokemon.name.toUpperCase()} </h4> 
                                    <p><small>by <a href={'https://pokeapi.co'} target="_blank" rel="noopener noreferrer">pokeapi.co</a></small></p>
                                </div>
                                <div class="flex-column">
                                    <span class="badge badge-primary badge-pill"> {`Height ${pokemon.height}`}</span><br />
                                    <span class="badge badge-secondary badge-pill"> {`Weight ${pokemon.weight}`}</span><br />
                                    <span class="badge badge-info badge-pill"> {`Base experience ${pokemon.base_experience}`}</span>
                                </div>
                                </p>
                            </ul>
                        </div>
                        <div className="col-md-3">
                        { pokemon.sprites&& <Gallery images={pokemon} name={pokemon.name} />}
                        </div>
                    </div>
                    <div className="abilities-table">

                    </div>
            </div>
        </div>
    )
}
