import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon1: Pokemon = new Pokemon('Oddish', 'grass', 'water');
let wildPokemon2: Pokemon = new Pokemon('Haro', 'fire', 'water');
let wildPokemon3: Pokemon = new Pokemon('Mishisaki', 'electric', 'grass');
let wildPokemon4: Pokemon = new Pokemon('Tempu', 'flying', 'fire');
let wildPokemon5: Pokemon = new Pokemon('Zahora', 'water', 'grass');
let wildPokemon6: Pokemon = new Pokemon('Ygix', 'fighting', 'flying');

// Which pokemon should Ash use?


// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash
// console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Bulbasaur', 'grass', 'water'),
        new Pokemon('Pikachu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'grass'),
        new Pokemon('Pidgeot', 'flying', 'fighting'),
        new Pokemon('Kingler', 'water', 'fire'),
        new Pokemon('Blastix', 'water', 'fire')
    ];
}

//console.log(pokemonOfAsh[0]);
//console.log(pokemonOfAsh[3].isEffectiveAgainst(wildPokemon6));
wildPokemon1.chooseEffective(pokemonOfAsh, wildPokemon1);
wildPokemon2.chooseEffective(pokemonOfAsh, wildPokemon2);
wildPokemon3.chooseEffective(pokemonOfAsh, wildPokemon3);
wildPokemon4.chooseEffective(pokemonOfAsh, wildPokemon4);
wildPokemon5.chooseEffective(pokemonOfAsh, wildPokemon5);
wildPokemon6.chooseEffective(pokemonOfAsh, wildPokemon6);