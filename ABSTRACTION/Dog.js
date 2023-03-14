import { Animal } from './Animal.js';

// Définition d'une sous-classe qui hérite de la classe abstraite Animal
export class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  // Implémentation de la méthode abstraite makeSound pour la sous-classe Dog
  makeSound() {
    console.log(this.name + ' aboie');
  }
}
