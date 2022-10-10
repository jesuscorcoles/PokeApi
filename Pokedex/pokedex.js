const allPokemon = [];


async function pokemon() {

  for (let i = 1; i< 151; i++){
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+i);
  const resPokemon = await res.json ();
  allPokemon.push(resPokemon);
}} 

  const mapPokemon = (pokem) =>{
    const mappedPokemons = pokem.map((poke) => ({
      id: poke.id,
      name: poke.name,
      types: poke.types.map(type => type.type.name),
      height: poke.weight,
      weight: poke.weight,
      img: poke.sprites.other.home.front_default,

    }))
    
    return mappedPokemons
  }
  
  const imprimirPokemons = (pokem) => {
    const ol$$ = document.querySelector("ol");
    ol$$.className = "ole";

    const div$$ = document.createElement('div');
    div$$.className = "target";

    const divFondPoke$$ = document.createElement("div");
    divFondPoke$$.className = "fond-Poke";

    const divfondo$$ = document.createElement("div");
    divfondo$$.className = "ima-fondo";

    const img$$ = document.createElement('img');
    const h1$$ = document.createElement('h1');
    const h2$$ = document.createElement('h2');


    const divname$$ = document.createElement('div');
    divname$$.className = "fondodatos" 


    img$$.setAttribute("src", pokem.sprites.other.home.front_default); 
    img$$.className = "ima";


    h1$$.textContent = pokem.name;
    h1$$.className = "Depixel";

    h2$$.textContent = "nº" + pokem.id;
    h2$$.className = "number";

    const pokeimg$$ = document.createElement('img');
    pokeimg$$.className = "symbol";
    


    ol$$.appendChild(div$$);
    div$$.appendChild(divFondPoke$$)
    divFondPoke$$.appendChild(divfondo$$);
    divfondo$$.appendChild(img$$);
    div$$.appendChild(h1$$);
    div$$.appendChild(h2$$);
    div$$.appendChild(divname$$);
    divname$$.appendChild(h1$$);
    divname$$.appendChild(h2$$);
    divname$$.appendChild(pokeimg$$);
    document.body.appendChild(ol$$)
 
  }
  
  const searchPoke = (filter,mapPokemon) => { 
    const ol$$ = document.querySelector("ol");
    ol$$.innerHTML = "";
    const filterPoke = mapPokemon.filter( /**(pokemon) => pokemon.name.toLowerCase().includes(filter.toLowerCase()),*/ (pokemon) => {
    if (pokemon.name.toLowerCase().includes(filter.toLowerCase())) {
        return true
    }

      for (let i = 0; i < pokemon.types.length; i++) {
        let type = pokemon.types[i].type;
        if (type["name"].toLowerCase() == filter.toLowerCase()) {
          return true;
        }
      }

      return false;

  });

    for (const pokemon of filterPoke) {
      imprimirPokemons(pokemon); 

    }
}

  const setListener = (mappedPokemons) => {
    let btn$$ = document.querySelector("button");
    let input$$ = document.querySelector("input");

    btn$$.addEventListener('click',() => searchPoke (input$$.value,allPokemon));

  }
  async function init () {
    const imprimirPokemon = await pokemon();
    const mappedPokemons = mapPokemon(allPokemon);

    for (const pokemon of allPokemon) {
      imprimirPokemons(pokemon);
      
    }
   }

  setListener(allPokemon);
  init();