//Implementa una función `concat` (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (a, b) => [...a, ...b];

console.log(concat(["First", "Second", "Third"], ["1", "2", "3"]));