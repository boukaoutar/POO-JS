import { Animal } from './Animal.js';

// Définition d'une autre sous-classe qui hérite de la classe abstraite Animal
export class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  
  // Implémentation de la méthode abstraite makeSound pour la sous-classe Cat
  makeSound() {
    console.log(this.name + ' miaule');
  }
}
