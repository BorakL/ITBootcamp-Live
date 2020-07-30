// Написати програм који исписује рачун у кафани, али само муштеријама које имају више од 18
// година

// Додатно, попуст се одобрава у два следећа случаја:
//      1. Број година дељив са 7 (15% попуста)
//      2. Број година дељив са 11 (25% попуста)

// Улазни подаци:
//  Количина (број пића)
//  Цена једног пића
//  Број година муштерије

// Напомена: Проверити улазне податке (Валидност количине, цене и година)

let kolicina = -9
let cenaPoKomadu = 180
let godine = 77

let ukupnaCena = kolicina * cenaPoKomadu

if (kolicina > 0 && cenaPoKomadu > 0 && godine > 0) {
    if (godine > 18) {
        if (godine % 7 === 0) {
            // console.log('Рачун је: ',ukupnaCena - ukupnaCena * 15 / 100)
            console.log('Рачун је: ', ukupnaCena * 0.85)
        }
        else if (godine % 11 === 0) {
            console.log('Рачун је: ', ukupnaCena * 0.75)
        }
        else {
            console.log('Рачун је: ', kolicina * cenaPoKomadu)
        }
    }
    else {
        console.log('Не може')
    }
}
else{
    console.log('Није валидан унос')
}