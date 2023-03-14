// TODO: HERITAGE : UNE CLASSE (Sous-classe OU Enfant ) HERITE D'UNE AUTRE CLASSE (Superclasse OU Parent)

// La superclasse/Parent : 
export class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
