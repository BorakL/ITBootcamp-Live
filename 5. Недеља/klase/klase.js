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
console.log(p1.duz);
p1.duz = 2
console.log(p1.opis());
//Napraviti klasu Sastojak koja sadrzi polja : ime kolicina i cena , ima metodu koja racuna ukupnu cenu
