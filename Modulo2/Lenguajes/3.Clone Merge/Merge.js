//Implementa una función `merge` que, dados dos objetos de entrada `source` y `target`, devuelva un nuevo objeto con todas las propiedades de `target` y de `source`, y en caso de propiedades con el mismo nombre, `source` sobreescribe a `target`.

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

// el resultado de mezclar `a` sobre `b` sería: {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

const merge = (source, target) => {
  return { ...target, ...source };
};

console.log(merge(a, b));
