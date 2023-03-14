import { Animal } from './Animal.js';

// La sous-classe/Enfant 2 : 
export class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} meows.`);
  }
}
