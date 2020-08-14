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


let sastojak1 = new Sastojak('Paprika', 3, 100)
let sastojak2 = new Sastojak('Melko', 10, 50)
let sastojak3 = new Sastojak('Hleb', 2, 30)

let sastojci = [sastojak1, sastojak2, sastojak3]

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
        console.log(`Naziv: ${this.naziv}, tezina: ${this.tezina}, sastojci: ${this.sastojci.map(el => el.ispis())}`);
    }

    ukupnaCenaRecepta(){
        
    }

}

let rec1 = new Recept('Rec1', 'laki', sastojci)
rec1.ispis()