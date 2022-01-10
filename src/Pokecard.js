import React, { Component } from 'react';
import './Pokecard.css';

function padID(id)
{
    let idString = id.toString();
    while (idString.length < 3)
    {
        idString = '0' + idString;
    }
    return idString;
}

class Pokecard extends Component
{

    render()
    {
        const props = this.props;
        const { pokemon } = props;
        return (
            <div className="Pokecard">
                <h3 className="Pokecard-name">{pokemon.name}</h3>
                <img className="Pokecard-img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padID(pokemon.id)}.png`} alt={pokemon.name} />
                <p>Type: {pokemon.type.toLowerCase()}</p>
                <p>EXP: {pokemon.base_experience}</p>
            </div>
        );
    }
}

export default Pokecard;