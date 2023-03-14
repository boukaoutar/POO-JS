// TODO: ENCAPSULATION : METTRE UNE CHOSE DANS UNE AUTRE CHOSE : private / public 

export class Person {
  constructor(name, age) {
    this.name = name; // Propriété publique
    let _age = age; // Propriété privée
  
    this.getAge = function() { // Méthode publique pour accéder à la propriété privée
      return _age;
    }
  
    this.setAge = function(newAge) { // Méthode publique pour modifier la propriété privée
      if (newAge > 0 && newAge < 120) {
        _age = newAge;
      }
    }
  }
}
