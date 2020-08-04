import React from 'react';
import PokemonFrame from './PokemonFrame';

export default function PokemonList({ pokemon }) {
    function handleClick(name) {
        // this.props.onHandleClick(name)
        console.log(name)
    }
    return (
        <div class="mt-4">
            <div class="row">
            <div class="card-deck">
                {pokemon.map(p => (
                    <PokemonFrame name={p} onHandleClick={handleClick} />
                ))}
            </div>
            </div>
        </div>
    )
}
