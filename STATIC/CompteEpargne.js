// TODO: LES MEMBRES STATIQUES / PARTAGES

export class CompteEpargne {
    static taux = 0.87 ;

    constructor(numeroCompte, solde) {
      this.numeroCompte = numeroCompte;
      this.solde = solde;
      CompteEpargne.taux;
    }

    calculInteret() {
        return this.solde * CompteEpargne.taux;
    }
  
}
  