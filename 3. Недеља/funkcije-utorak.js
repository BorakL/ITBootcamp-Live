// Синтакса

function jeDeljivSa5(x){ // isDivisibleBy5
    // тело
    return x % 5 === 0 // Враћа Boolean (true/false)
}

function sum(a,b){
    console.log(a + b)
    return a + b
}

// Зашто користимо функције
let y = sum(6,'flsdfk')

console.log(y)

// Задаци

// Функција која враћа --- нека вредност
// Функција која исписује --- нека вредност

function red(n){
    return '*'.repeat(n)
}
function ispisiRedove(jedanRed,brojRedova){
    for(let i = 0; i < brojRedova; i++){
        console.log(jedanRed)
    }
}   
ispisiRedove('Hello World',15)

// Написати функцију која исписује да ли је број дељив са 3

function printDivisibleBy3(num){
    // if(num % 3 === 0){
    //     console.log(`Број ${num} је дељив са 3`)
    // }
    // else{
    //     console.log(`Број ${num} није дељив са 3`)
    // }
    num % 3 === 0 ? 
        console.log(`Број ${num} је дељив са 3`) 
        : 
        console.log(`Број ${num} није дељив са 3`)
}

// Написати функцију која проверава да ли број дељив са 3

function isDivisibleBy3(num){
    return num % 3 === 0
}

printDivisibleBy3(6)
isDivisibleBy3(6)

// Написати програм који израчунава збир бројева дељивих са 3, од 1 до N

let N = 100
let zbir = 0
for(let i = 0; i < N; i++){
    if(isDivisibleBy3(i)){
        zbir += i
    }
}
console.log(zbir)

// Исписати све бројеве дељиве са 3 од 1 до N

// let N = 100
for(let i = 0; i < N; i++){
    printDivisibleBy3(i)
}

let x = 5

x.repeat(3)





// maxOdTri

// let x = 30
// let y = 30
// let z = 30


// console.log('Највећи од три броја: ' + maxOdTri(x,y,z))