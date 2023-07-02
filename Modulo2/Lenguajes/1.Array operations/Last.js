//Implementa una función `last` (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (array) => array.slice(-1);

console.log(last(["First", "Second", "Third", "Fourth", "Fifth"]));