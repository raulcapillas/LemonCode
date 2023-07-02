//Implementa una función `clone` que, a partir de un objeto de entrada `source` devuelva un nuevo objeto con las propiedades de `source`:

const clone = (source) => {
  return { ...source };
};

console.log(clone({ one: "1", two: "2", three: "3" }));
