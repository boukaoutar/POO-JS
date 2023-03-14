
import { Dog } from './Dog.js';
import { Cat } from './Cat.js';

let dog = new Dog('Rex');
let cat = new Cat('Mittens');

dog.speak(); // Output : "Rex barks."
cat.speak(); // Output : "Mittens meows."

/* Lorsque nous appelons la méthode speak() sur une instance de la classe Dog, la méthode speak() de la classe Dog est exécutée, 
   et lorsque nous appelons la méthode speak() sur une instance de la classe Cat, la méthode speak() de la classe Cat est exécutée.

   Ceci est un exemple de polymorphisme, car les deux classes filles ont une méthode speak() qui a le même nom que la méthode speak() 
   de la classe parente, mais qui a un comportement différent. En utilisant le même nom de méthode (speak()) pour les deux classes filles,
   nous pouvons appeler la méthode speak() sur n'importe quelle instance (dog ou cat) et avoir un comportement différent en fonction de
   la classe de l'instance. */