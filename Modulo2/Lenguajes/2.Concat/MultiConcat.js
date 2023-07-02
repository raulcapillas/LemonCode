//Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const multiConcat = (...args) => [].concat(...args);

console.log(multiConcat(["First", "Second", "Third"], ["1", "2", "3"], [1, 2, 3]));