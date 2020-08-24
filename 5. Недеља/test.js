class Covek {
    constructor(ime,prezime){
        this.ime = ime
        this.prezime = prezime
    }
}

class Student extends Covek{
    constructor(ime,prezime,index,prosek){
        super(ime,prezime)
        this.index = index
        this.prosek = prosek
    }
    
    potpis(){
        console.log(this.ime,this.prezime,this.index)
    }
}

class Profesor extends Covek{
    constructor(ime,prezime,katedra){
        super(ime,prezime)
        this.katedra = katedra
    }

    potpis(){
        console.log('Dr.',this.ime,this.prezime)
    }
}

let s2 = new Student('pera','peric','sd1231',8.2)
let s3 = new Covek('aaaaa','aaaaaaa')
let s1 = new Profesor('dddd','ddd','dddddddd')

let nizOsoba = [s1,s2,null,s3]

nizOsoba.filter(el => el && el.potpis)
        .forEach(el => el.potpis())






