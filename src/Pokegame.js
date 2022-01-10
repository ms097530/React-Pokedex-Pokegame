import React, { Component } from 'react';
import './Pokegame.css';
import Pokedex from './Pokedex';

class Pokegame extends Component
{
    static defaultProps =
        {
            pokemon:
                [
                    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
                    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
                    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
                    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
                    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
                    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
                    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
                    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
                ]
        };
    render()
    {
        const props = this.props;
        let hand1 = [];
        let hand2 = [...props.pokemon];
        while (hand2.length > hand1.length)
        {
            let randomIndex = Math.floor(Math.random() * hand2.length);
            let randomPokemon = hand2.splice(randomIndex, 1)[0];
            hand1.push(randomPokemon);
        }
        let hand1exp = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let hand2exp = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

        let p1Message, p2Message, p1class, p2class;
        if (hand1exp > hand2exp)
        {
            p1Message = 'Player 1 wins!';
            p2Message = 'Better luck next time.';
            p1class = 'Pokegame-winner';
            p2class = 'Pokegame-loser';

        }
        else
        {
            p1Message = 'Better luck next time.';
            p2Message = 'Player 2 wins!';
            p1class = 'Pokegame-loser';
            p2class = 'Pokegame-winner';
        }
        return (
            <div className="Pokegame">
                <div className="Pokegame-hand1">
                    <h2>Player 1</h2>
                    <Pokedex pokemon={hand1} />
                    <p>Total EXP: {hand1exp}</p>
                    <p className={p1class}><strong>{p1Message}</strong></p>
                </div>
                <div class="Pokegame-hand2">
                    <h2>Player 2</h2>
                    <Pokedex pokemon={hand2} />
                    <p>Total EXP: {hand2exp}</p>
                    <p className={p2class}><strong>{p2Message}</strong></p>
                </div>
            </div>
        )
    }
}

export default Pokegame;