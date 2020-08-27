// let pravougaonik1 = {
//     duzina: 10,
//     sirina: 5,
//     povrsina: function () {
//         console.log(this.duzina * this.sirina);
//     }
// }


class Pravouganik {
    constructor(a, b) {
        this.sirina = a
        this.duzina = b
    }

    get duz() {
        return this.duzina
    }
    get sir() {
        return this.sirina
    }

    set duz(duzina) {
        this.duzina = duzina
    }

    povrsina() {
        return this.sirina * this.duzina
    }

    obim() {
        return this.sirina * 2 + this.duzina * 2
    }

    opis() {
        // console.log(this);
        return `Pravougaonik sirine ${this.sirina} i duzine ${this.duzina}`
    }

}

let p1 = new Pravouganik(3, 4)
let p2 = new Pravouganik(5, 2)
// console.log(p1.povrsina());
// console.log(p2.povrsina());
// console.log(p2.opis());
// console.log(p1.opis());
//console.log(p1.duz);
p1.duz = 2
//console.log(p1.opis());

//Napraviti klasu Sastojak koja sadrzi polja : ime kolicina i cena , ima metodu koja racuna ukupnu cenu

class Sastojak {
    constructor(ime, kolicina, cena) {
        this.ime = ime
        this.kolicina = kolicina
        this.cena = cena
    }

    ukupnaCena() {
        return this.kolicina * this.cena
    }

    ispis() {
        return `Sastojak: ${this.ime} cene: ${this.cena} i kolicine: ${this.kolicina}`
    }
}


let sastojak1 = new Sastojak('kisela pavlaka', 1, 50)
let sastojak2 = new Sastojak('sir', 1, 100)
let sastojak3 = new Sastojak('origano', 2, 17)
let sastojak4 = new Sastojak('integralni hleb', 1, 120)
let sastojak5 = new Sastojak('patlidzan', 2, 20)
let sastojak6 = new Sastojak('djumbir', 3, 18)

let s1 = new Sastojak('secer', 1, 80)
let s2 = new Sastojak('jaje', 3, 10)
let s3 = new Sastojak('cokolada', 2, 100)
let s4 = new Sastojak('vanilin secer', 2, 20)
let s5 = new Sastojak('mleko', 1, 150)

let sastojci1 = [sastojak1, sastojak2, sastojak3, sastojak4, sastojak5, sastojak6]
let sastojci2 = [s1, s2, s3, s4, s5]

// sastojci.forEach(sastojak => {
//     sastojak.ispis()
// })

class Recept {
    constructor(naziv, tezina, sastojci) {
        this.naziv = naziv
        this.tezina = tezina
        this.sastojci = sastojci
    }

    ispis() {
        console.log(`Naziv: ${this.naziv}, tezina: ${this.tezina}, sastojci:[ ${this.sastojci.map(el => el.ispis())} ]`);
    }

    ukupnaCenaRecepta() {

    }

}

let rec1 = new Recept('Sendvic sa djumbirom', 'Pocetni', sastojci1)
let rec2 = new Recept('mafini', 'pocetni', sastojci2)
rec1.ispis()
rec2.ispis()