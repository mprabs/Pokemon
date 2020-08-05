import React, { Component } from 'react'
import axios from 'axios'
import './app.css';
import Spinner from "./helper/spinner"
import { Link } from 'react-router-dom';
import LOCAL_POKEMON_DATA from './config';
import ucfirst from './functions/upcase-first-char';
class PokemonFrame extends Component {

    constructor(props) {
        super(props);
        this.state={
            name: props.name,
            image: ""
        }
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`).then((response) => {
            this.setState({
                image: response.data.sprites.other.dream_world.front_default
            })
            localStorage.setItem(LOCAL_POKEMON_DATA+`${response.data.name}`, JSON.stringify(response.data))
        })
    }

    if(loading) {
        return(
            <div className="col-6 col-md-3" key={this.state.name}>
                <div className="card mb-4">
                    <div className="card-body text-center">
                        <Spinner />
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="col-6 col-md-3" key={this.state.name}>
                <Link to={`/${this.state.name}`}>
                    <div className="card mb-4">
                        <img className="card-img-top" src={this.state.image} alt="pokemon"></img>
                        <div className="card-body text-center">
                            <h5 className="card-title">{ucfirst(this.state.name)}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default PokemonFrame;