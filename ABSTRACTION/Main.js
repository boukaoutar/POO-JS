
import { Dog } from './Dog.js';
import { Cat } from './Cat.js';

// Création d'objets à partir des sous-classes
const dog = new Dog('Médor');
const cat = new Cat('Minou');
  
// Utilisation des méthodes de chaque objet
dog.makeSound(); // affiche "Médor aboie"
cat.makeSound(); // affiche "Minou miaule"
  