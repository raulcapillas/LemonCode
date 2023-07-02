//Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = (array) => {
  [firstElement, ...restElements] = array;
  return firstElement;
};

console.log(head(["First", "Second", "Third"]));
