import { Animal } from './Animal.js';

// La sous-classe/Enfant 1 : 
export class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}
