import fetch from "node-fetch";

class FetchMeth {

  async getRandomPokemon(){
    let randomPokemon = Math.floor(Math.random() * 151) + 1;
    const getPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`;

    try {
      const getRandomPokemonName = await fetch(getPokemonUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      const bodyGetPokemon = await getRandomPokemonName.json();
      const pokemonName = await bodyGetPokemon.forms[0].name;
      const pokemonReturn = JSON.parse(JSON.stringify(await pokemonName));
            
      if (!getRandomPokemonName.ok || getRandomPokemonName.status !== 200) {
        throw new Error(
          `Error on reset fetch response. Response status: ${getRandomPokemonName.status}`
        );
      }
      return await pokemonReturn;
    } catch (error) {
      console.error(error);
    }  
  }

}

export default new FetchMeth();
