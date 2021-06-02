var gitKnowledge = [
  "Martes",
  "Arrays",
  "helloGit",
  "Js rocks",
  "pull requests",
  "Conflictos",
];

/* ========== Iterar el array =========== */

for (var i = 0; i < gitKnowledge.length; i++) {
  console.log(gitKnowledge[i]);
}

console.log(gitKnowledge);

/* ========== Convertir a mayúscula todas las palabras
 ===========  */

var toUpper = function (x) {
  return x.toUpperCase();
};

gitToUpper = gitKnowledge.map(toUpper);

for (var i = 0; i < gitToUpper.length; i++) {
  console.log(gitToUpper[i]);
}

console.log(gitToUpper);

/* ========== Obtener de cada palabra solo un fragmento de los caracteres desde posición a 0 al 3
 =========== */

var i,
  out = [];

for (i = 0; i < gitKnowledge.length; i++) {
  out.push(gitKnowledge[i].slice(0, 3));
}

/*========= Imprimir en consola la palabra ya recortada =========*/

for (var i = 0; i < out.length; i++) {
  console.log(out[i]);
}

console.log(out);
