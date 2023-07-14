//Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = (...args) => [...args].pop();

console.log(tail("First", "Second", "Third"));


// Other solution

const tail2 = ([head, ...tail]) => tail;

console.log(tail2("First", "Second", "Third"));