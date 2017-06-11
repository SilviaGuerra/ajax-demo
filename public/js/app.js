/*var xhr = new XMLHttpRequest();

$.getJSOn("")
xhr.onreadystatechange = function (e) {
  if (this.readyState === 4) {
    if (this.status === 200) {
      var response = JSON.parse(this.response);
      var pokemons = response.results;
      // crearSquads(squads);
      crearPokemons(pokemons);
    }

  }
};

xhr.open("GET", "data/squads.json");

xhr.send();

function crearSquads(squads) {
  var ul = document.getElementById("squads");

  squads.forEach(function (squad) {
    var li = document.createElement("li");
    li.textContent = squad.nombre;

    ul.appendChild(li);
  });
}*/

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function (e) {
// 	if (this.readyState === 4) {
// 		if (this.status === 200) {
// var response = JSON.parse(this.response);
// var pokemons = response.results;
// var squads = JSON.parse(this.response);
// crearPokemons(pokemons);
// 		}

// 	}
// };

// xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/");

// xhr.send();
$.getJSON("http://pokeapi.co/api/v2/pokemon/",
function (response) {
  var pokemons = response.results;
  crearPokemons(pokemons);
});

function crearPokemons(pokemons){
  var ul = document.getElementById("pokemons");

  pokemons.forEach(function(pokemon){
    var li = document.createElement("li");

    $.getJSON(pokemon.url, function (response){
      var abilities = response.abilities;
      habilidades.click(pokemons);
    });


    // pokemon.click(info);
    //
    // function info(pokemon){
    //
    // });

    var pokePlantilla = '<div class="col s3">' + '<div class="card">' +
    '<div class="card-image waves-effect waves-block waves-light">' +
    '<img class="activator" src="assets/img/' + pokemon.name + '.png" height="300">' +
    '</div>' + '<div class="card-content">' +
    '<span class="card-title activator grey-text text-darken-4">' + pokemon.name + '<i class="material-icons right">more_vert</i></span>' +
    '<p><a href="#">Info</a></p>' + '</div>' +
    '<div class="card-reveal">' +
    '<span class="card-title grey-text text-darken-4">' + pokemon.abilities + '<i class="material-icons right">close</i></span>' +
    '<p></p>' +
    '</div>' + '</div>' + '</div>';

    $("#aqui").append(pokePlantilla);
  });


}





// function crearPokemons(pokemons) {
//
//
//   pokemons.forEach(function (pokemon) {
//     var li = document.createElement("li");
//
//
//   pokemon.click(info);
//
//   function info(){
//     $.getJSON(pokemon.url, function (response){
//       var abilities = response.abilities;
//     });
//
//
//   };
// };
