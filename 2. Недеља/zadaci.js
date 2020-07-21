// Написати програм који за унете параметре
// Рачуна и испише обим и површину следећих фигура:
// Круг, Правоугаоник, Квадрат

{
    let r = 12
    let O, P
    O = 2 * r * Math.PI
    P = r * r * Math.PI
    console.log(O, P)
}

{
    // ... 
}

{
    let r = -10
    if(r >= 0){
        let O, P
        O = 2 * r * Math.PI
        P = r * r * Math.PI
        console.log(O, P)
    }
    console.log('kraj programa') 
}

{
    let x = 12

    if(x < 10){
        console.log('prvi slucaj')
    }
    else if(x < 15){
        console.log('drugi slucaj')
    }
    else{
        console.log('treci slucaj')
    }
}

// {
//     let danUnedelji = 1

//     switch(danUnedelji){
//         case 1:
//             console.log('Радни дан')
//              break
//         case 2:
//             console.log('Радни дан')
//              break
//         case 6:
//             console.log('Нерадни дан');
//              break
//         default:
//             console.log('Nije ponedeljak ni utorak')
//              break
//     }
// }

// На основу дана у недељи (задат бројем) исписати да ли је викенд или радни дан
// 0 - 6 или 1 - 7 
// Са switch и са if/else структуром

// {
//     let dan = 6

//     if(dan >= 1 && dan <= 7){ // Провера валидности дана
//         if(dan == 6 || dan == 7){
//             console.log('Викенд')
//         }
//         else{
//             console.log('Радни дан')
//         }
//     }
//     else{
//         console.log('Није валидан унос')
//     }

// }

{
    let dan = 0

    switch(dan){
        case 0: 
        case 6:
            console.log('Викенд')
            break
        case 3:
        case 2:
        case 1:
        case 4:
        case 5:
            console.log('Радни дан')
            break
    
        default:
            console.log('Није валидан унос')
            break
    }
}

// На основу месеца исписати колико он има дана
// 0 - 11

{
    let mesec = 1
    let godina = 2000
    switch(mesec){
        case 0:
        case 2: 
        case 4: 
        case 6: 
        case 7: 
        case 9: 
        case 11:
            console.log('31')
            break
        case 1:
            if(godina % 4 === 0 && (godina % 100 !== 0 || godina % 400 === 0)){
                console.log(`29`)
            }
            else{
                console.log(`28`)
            }
            break
        case 3: 
        case 5: 
        case 8: 
        case 10:
            console.log('30')
            break
        default:
            console.log('Није валидан унос')
            break
    }
}

{
    let mesec = 0
    let godina = 1972
    if(mesec === 0 || mesec === 2 || mesec === 4 || mesec === 6 || mesec === 7 || mesec === 9 || mesec === 11){
        console.log(31)
    }
    else if(mesec === 1){
        if(godina % 4 === 0 && (godina % 100 !== 0 || godina % 400 === 0)){
            console.log(`29`)
        }
        else{
            console.log(`28`)
        }
    }
    else if(mesec === 3 || mesec === 5 || mesec === 8 || mesec === 10){
        console.log('30')
    }
}

// true / false
// truthy / falsy

// Math.pow(2,3)
// 2 ** 3
// Петља

// x дељив са y
// x % y 







