//Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = (...args) => [...args].pop();

console.log(tail("First", "Second", "Third"));