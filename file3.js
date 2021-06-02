var pokemon = {
  nombre: "Pikachu",
  tipoDePokemon: "Ratón",
  evolucion: "Raichu",
  altura: 0.4,
  peso: 6,
};

/* ======== Crear un arreglo de las keys
 ======== */

pokeArray = Object.keys(pokemon);

/* =========Iterar el arreglo e imprimir en salida cada valor========= */

for (i = 0; i < pokeArray.length; i++) {
  console.log(pokeArray[i]);
}

console.log(pokeArray);
