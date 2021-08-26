
let pokemons = [];// array 


async function loadPokemons() {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`; // api

    let response = await fetch(url);
    let responseAsJson = await response.json();

    for (let i = 0; i < responseAsJson.results.length; i++) {

        let url = responseAsJson.results[i]['url'];// zugriff zu alle api in result
        let response = await fetch(url);
        let PokemonAsJson = await response.json();

        pokemons.push(PokemonAsJson);
    }
    renderPokemons();

}
function renderPokemons() {

    for (let i = 0; i < pokemons.length; i++) {// alle pokemons in div
        document.getElementById('allPakemons').innerHTML +=
        `<div onclick="openPokemon(${i})"   id="pokekarten-${i}" class="pokekarten">
            <div class="display"><img  id="pokebild-${i}" class="pokebild" ></div>
            <div class="pokename"><h2 id="pokename-${i}" >${pokemons[i]['name']}</h2></div>
        </div>`;
        document.getElementById('pokebild-' + i).src = pokemons[i]['sprites']['other']['dream_world']['front_default'];
    }

}
function openPokemon(i) {// gewählte pokemons 
    document.getElementById('allPakemons').innerHTML =
        `
		<div class ="flex">
            <a onclick="goclose()" class="close" href="#"><---</a>
       	    <div class="choose"><img class="pokeBild"  id="pokebild-${i}"></div>
       	    <div class ="h1Text1"><h1 id="pokename-${i}" >${pokemons[i]['name']}</h1></div>
        	<div class="bgcolor">
        
        	    <span class="margin, bggelb" id ="heit"> Height:  ${pokemons[i]['height']}</span><br>
        	    <span class="margin bggelb" id ="heit"> Weight:  ${pokemons[i]  ['weight']}</span><br>
       	        <span class="margin bggelb" id ="heit"> Order:  ${pokemons[i]['order']}</span>
        	</div>
		</div>`;
    document.getElementById('pokebild-' + i).src = pokemons[i]['sprites']['other']['dream_world']['front_default'];
}


function goclose(){
   
    window.history.go();
    renderPokemons();
}
