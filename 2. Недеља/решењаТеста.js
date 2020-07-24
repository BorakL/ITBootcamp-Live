// Продавница

{
    let kolicina = 134.24
    let cenaNa100 = 60
    let dan = 2

    let cenaPoGramu = cenaNa100 / 100

    let cenaUkupno = cenaPoGramu * kolicina
    
    if(dan == 1 || dan == 5){
        cenaUkupno -= cenaUkupno / 10
    }

    if(dan > 0 && dan < 8 && cenaNa100 > 0 && kolicina > 0){
        console.log(`Купац треба да плати ${cenaUkupno} рсд`)
    }
    else{
        console.log('Грешка при уносу')
    }
}
console.log('--------------------------------------------')

// Осмица
// W = 6 , H = 10
//  ####
// #    #
// #    #
// #    #
//  ####
// #    #
// #    #
// #    #
// #    #
//  #### 

{
    let W = 8, H = 8

    let precka = ' ' + '#'.repeat(W - 2) + ' '
    let red = '#' + ' '.repeat(W - 2) + '#'

    console.log(precka)

    for(let i = 0; i < Math.floor((H - 3) / 2); i++){
        console.log(red)
    }

    console.log(precka)

    for(let i = 0; i < (H - 3) / 2; i++){
        console.log(red)
    }

    console.log(precka)
}
console.log('--------------------------------------------')

// Аритметичка средина  - од K до N
{
    let K = 1
    let N = 5

    if(K > N){
        let tmp = K
        K = N
        N = tmp
    }

    // let count = 0
    let zbir = 0
    for(let i = K; i <= N; i++){
        zbir += i
        // count++
    }

    console.log(`Аритметичка средина бројева између ${K} и ${N} укључујући ${N} је: ${zbir / (N - K + 1)}`)
}
console.log('--------------------------------------------')

// Преступне године
{
    let pocetna = 1234
    let count = 30

    while(count){
        if(pocetna % 4 === 0 && (pocetna % 100 !== 0 || pocetna % 400 === 0)){
            console.log(pocetna)
            count--
        }
        pocetna++
    }
}






