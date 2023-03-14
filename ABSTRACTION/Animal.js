// TODO: ABSTRACTION : FOCALISER SUR L'ESSENTIEL et IGNORER LES DETAILS

export class Animal {
  constructor(name) {
    this.name = name;
  }
  
  // Méthode abstraite qui doit être implémentée par les sous-classes
  /* méthodes sont déclarées sans corps (sans implémentation) 
  et doivent être implémentées dans les classes dérivées. Ces méthodes sont appelées des méthodes abstraites. */
  makeSound() {
    throw new Error('La méthode makeSound doit être implémentée.');
  }
}
