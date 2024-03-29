//Implementa una función `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (array) => {
  array.splice(-1);
  return array;
};

console.log(init(["First", "Second", "Third", "Fourth", "Fifth"]));

// Corrections

const arr = ["First", "Second", "Third", "Fourth", "Fifth"];

const init2 = (array) => {
  return array.slice(0, -1);
};

console.log(init2(arr));
console.log(arr);
