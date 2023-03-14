// TODO: POLYMORPHISME : PEUT PRENDRE PLUSIEURS FORME COMME UN (+)

// La superclasse/Parent : 
export class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
