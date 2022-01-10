// import logo from './logo.svg';
import './App.css';
// import Pokedex from './Pokedex.js'
// import './Pokedex.css'
import Pokegame from './Pokegame';

function App()
{
  const pokemon =
    [
      {
        name: 'Squirtle', type: 'water', id: '7', base_experience: 63
      },
      {
        name: 'Wartortle', type: 'water', id: '8', base_experience: 126
      },
      {
        name: 'Blastoise', type: 'water', id: '9', base_experience: 180
      },
      {
        name: 'Charizard', type: 'fire', id: '6', base_experience: 180
      }
    ];
  return (
    <div className="App">
      {/* <Pokecard pokemon={{ name: "Bulbasaur", type: "grass", id: "1", base_experience: 63 }} /> */}
      {/* <Pokedex pokemon={pokemon} /> */}
      <Pokegame pokemon={pokemon} />
    </div>
  );
}

export default App;
