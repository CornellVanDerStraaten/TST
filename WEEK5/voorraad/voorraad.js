// VerhoogHoeveelheid staat default op 1, dus met 1 te verhogen? 
// Geef dan geen andere verhoogAantal mee!
// Hetzelfde geldt voor verlaagAantal.
function Voorraad(item, aantal, verhoogAantal = 1, verlaagAantal = 1) {
    let artikel = item;
    let voorraad = aantal;
    let verhoogHoeveelheid = verhoogAantal;
    let verlaagHoeveelheid = verlaagAantal;

    this.getVoorraad = function () {
        return voorraad;

    }
    this.getArtikel = function () {
        return artikel;

    }
    this.showVoorraad = function () {
        console.log('De voorraad van : ' + artikel + ' is ' + voorraad);

    }
    this.verlaagVoorraad = function () {
        voorraad = voorraad - verlaagHoeveelheid;

    }
    this.verhoogVoorraad = function () {
        voorraad = voorraad + verhoogHoeveelheid;

    }

}