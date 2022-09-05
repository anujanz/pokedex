function fetchPokemon() {
    let pokemonName = "Blank";
    const PokemonNameMessage = "Pokemon Name:" + pokemonName;
    document.getElementById("name").innerHTML = PokemonNameMessage
  

   
  //JS Promises
  const requestURL = "https://pokeapi.co/api/v2/pokemon/pikachu";
    fetch(requestURL)
    .then((res) => res.json())
    .then((obj) => {
    console.log(obj);
    const n = obj.name;
    const PokemonNameMessage = "Pokemon Name:" + n;
    document.getElementById("name").innerHTML = PokemonNameMessage
    

//Image
    const imageUrl = obj.sprites.front_default;;
    document.getElementById("image").src = imageUrl;

// Move list
let move1 = obj.moves[0].move.name;
let move2 = obj.moves[1].move.name;
let move3 = obj.moves[2].move.name;
let move4 = obj.moves[3].move.name;
document.getElementById("move-list").innerHTML =
 `<li>${move1} </li> <li>${move2}  </li> <li>${move3} </li> <li>${move4}  </li>`;
});
     
  }


