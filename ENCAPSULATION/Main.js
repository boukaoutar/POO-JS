
import { Person } from './Person.js';

let person1 = new Person("John", 30);
console.log(person1.name); // Accès à la propriété publique
console.log(person1.getAge()); // Accès à la propriété privée
person1.setAge(35); // Modification de la propriété privée via une méthode publique
console.log(person1.getAge()); // Vérification de la modification de la propriété privée
  