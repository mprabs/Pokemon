import React from 'react'
import { Link } from 'react-router-dom';

export default function Header({ back }) {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <h1 className="navbar-brand"> Pokemons </h1>
                { back && <form class="form-inline">
                    <Link to={`/`} style={{ color: "black" }}>
                        <label class="mx-3 my-2 my-sm-0" >Back</label>
                    </Link>
                </form> }
            </nav>
        </div>
    )
}
