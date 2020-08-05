import React from 'react';
import PokemonFrame from './PokemonFrame';

export default function PokemonList({ pokemon }) {
    function handleClick(name) {
        // this.props.onHandleClick(name)
        console.log(name)
    }
    return (
        <div className="mt-4">
            <div className="row">
            <div className="card-deck">
                {pokemon.map(p => (
                    <PokemonFrame name={p} onHandleClick={handleClick} />
                ))}
            </div>
            </div>
        </div>
    )
}
