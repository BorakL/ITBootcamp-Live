// let pravougaonik1 = {
//     duzina: 10,
//     sirina: 5,
//     povrsina: function () {
//         console.log(this.duzina * this.sirina);
//     }
// }


// class Pravouganik {
//     constructor(a, b) {
//         this.sirina = a
//         this.duzina = b
//     }

//     get duz() {
//         return this.duzina
//     }
//     get sir() {
//         return this.sirina
//     }

//     set duz(duzina) {
//         this.duzina = duzina
//     }

//     povrsina() {
//         return this.sirina * this.duzina
//     }

//     obim() {
//         return this.sirina * 2 + this.duzina * 2
//     }

//     opis() {
//         // console.log(this);
//         return `Pravougaonik sirine ${this.sirina} i duzine ${this.duzina}`
//     }

// }

// let p1 = new Pravouganik(3, 4)
// let p2 = new Pravouganik(5, 2)
// console.log(p1.povrsina());
// console.log(p2.povrsina());
// console.log(p2.opis());
// console.log(p1.opis());
//console.log(p1.duz);
//p1.duz = 2
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
        // let cena = 0
        // this.sastojci.forEach(sastojak => {
        //     cena += sastojak.ukupnaCena()
        // });
        // return cena

        return this.sastojci.reduce((total, num) => total + num.ukupnaCena(), 0)
    }

}

let rec1 = new Recept('Sendvic sa djumbirom', 'pocetni', sastojci1)
let rec2 = new Recept('mafini', 'pocetni', sastojci2)
let rec3 = new Recept('treci', 'pocetni', sastojci2)
// rec1.ispis()
// rec2.ispis()
// console.log(rec1.ukupnaCenaRecepta());
// console.log(rec2.ukupnaCenaRecepta());

// let recepti = [rec1, rec2, rec3]
// recepti.filter(rec => rec.tezina == 'pocetni').forEach(el => {
//     console.log(el.ukupnaCenaRecepta());
// })
class Figura {
    constructor(boja) {
        this.boja = boja
    }
    getPovrsina() {
        return
    }
    getObim() {
        return
    }
}

class Krug extends Figura {
    constructor(boja, r) {
        super(boja)
        this.r = r
    }
    getPovrsina() {
        return this.r ** 2 * Math.PI
    }
    getObim() {
        return this.r * 2 * Math.PI
    }

}
class Pravouganik extends Figura {
    constructor(a, b, boja) {
        super(boja)
        this.a = a
        this.b = b
    }
    getPovrsina() {
        return this.a * this.b
    }
    getObim() {
        return 2 * this.a + 2 * this.b
    }
}

class Kvadrat extends Pravouganik {
    constructor(a, boja) {
        super(a, a, boja)
    }
}

let f1 = new Figura('crvena')
let f2 = new Krug('plava', 2)
let f3 = new Pravouganik(2, 4, 'crna')
let f4 = new Kvadrat(3, 'bela')

let figure = [f1, f2, f3, f4]
figure.forEach(oblik => {
    console.log(oblik.getPovrsina(), oblik.getObim());
})


