
function displayPokemon(obj){
            //Name
            console.log(obj);
            const name = obj.name;
            const PokemonNameMessage = "Pokemon Name:" + name;
            document.getElementById("name").innerHTML = PokemonNameMessage;
            
        //Image
            const imageUrl = obj.sprites.front_default;
            document.getElementById("image").src = imageUrl;
        
        // Move list
        const move1 = obj.moves[0].move.name;
        const move2 = obj.moves[1].move.name;
        const move3 = obj.moves[2].move.name;
        const move4 = obj.moves[3].move.name;
        document.getElementById("move-list").innerHTML =
         `<li>${move1} </li> <li>${move2}</li> <li>${move3}</li> <li>${move4}</li>`;
        }

    function fetchPokemon(){
        const requestURL = "https://pokeapi.co/api/v2/pokemon/";
    const searchTerm = document.getElementById("search-box").value;
    console.log(searchTerm);
     fetch(requestURL+searchTerm)
     .then((x) => x.json())
    .then((obj) => {
        displayPokemon(obj);
        });
    }