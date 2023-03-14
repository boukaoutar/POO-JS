
import { Square } from './Square.js';

const square1 = new Square('red', 5);
console.log(square1.color); // Output: "red"
console.log(square1.area()); // Output: 25

/* 
   Lorsque nous créons une instance de la classe Square (square1), 
   nous pouvons accéder à la propriété color et appeler la méthode area, 
   conformément à l'interface Shape.
*/