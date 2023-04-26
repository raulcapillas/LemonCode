/*
El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un **contador de monedas** que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al **método play** el número de monedas se debe incrementar de forma automática y debe generar **tres booleanos aleatorios** que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean `true`, y por tanto deberá mostrarse por consola el mensaje:

"Congratulations!!!. You won <número de monedas> coins!!";

y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina.
En caso contrario deberá mostrar otro mensaje:

"Good luck next time!!".
*/

let coins = 0; //Initial coins

const play = () => {
  coins++; // +1 coin

  const slot1 = Math.random() < 0.5;
  const slot2 = Math.random() < 0.5;
  const slot3 = Math.random() < 0.5;

  if (slot1 && slot2 && slot3) {
    const win = `Congratulations!!!. You won ${coins} coins!!`;
    coins = 0; //Restart coins
    return win;
  }

  return "Good luck next time!!";
};

console.log(play());
console.log(play());
console.log(play());
console.log(play());
console.log(play());
console.log(play());
console.log(play());
