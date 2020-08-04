import React, { Component } from 'react'
import axios from 'axios'
import styles from './app.css';
import Spinner from "./helper/spinner"
import { Link } from 'react-router-dom';
import LOCAL_POKEMON_DATA from './config';
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
                image: response.data.sprites.front_default
            })
            localStorage.setItem(LOCAL_POKEMON_DATA+`${response.data.name}`, JSON.stringify(response.data))
        })
    }

    if(loading) {
        return(
            <div class="col-6 col-md-3" key={this.state.name}>
                <div class="card mb-4" style={styles.card}>
                    <div class="card-body text-center">
                        <Spinner />
                    </div>
                </div>
            </div>
        )
    }

    
    ucfirst(str) {
        var firstLetter = str.substr(0, 1);
        return firstLetter.toUpperCase() + str.substr(1);
    }

    render() {
        return (
            <div class="col-6 col-md-3" key={this.state.name}>
                <Link to={`/${this.state.name}`}>
                    <div class="card mb-4" style={styles.card}>
                        <img class="card-img-top" src={this.state.image} alt="pokemon"></img>
                        <div class="card-body text-center">
                            <h5 class="card-title">{this.ucfirst(this.state.name)}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default PokemonFrame;