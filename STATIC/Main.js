
import { CompteEpargne } from './CompteEpargne.js';

const compteJulien = new CompteEpargne("S1236", 500);
const compteMarc = new CompteEpargne("S1459", 7500);

console.log(" Le compte de Julien est sous le numero : " + compteJulien.numeroCompte)
console.log(" Le solde de Marc est : " + compteMarc.solde + "$")
console.log(" Le taux est : " + CompteEpargne.taux)

console.log("****************************")

console.log(compteJulien.calculInteret()); // Output: 435
console.log(compteMarc.calculInteret()); // Output: 6525

/* 
   Chaque instance de la classe CompteEpargne possède une propriété numeroCompte et solde, 
   qui sont définies dans le constructeur. La méthode calculInteret utilise la propriété 
   solde de l'instance courante et la propriété statique taux de la classe CompteEpargne 
   pour calculer l'intérêt du compte. 
*/