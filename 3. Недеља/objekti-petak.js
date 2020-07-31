// Шта су објекти?
// let name1 = 'Pera'
// let age1 = 13
// let email1 = 'dskfjs'

// let name2 = 'jhf'
// let age2 = 34
// let email2 = 'dsjfksf'

// let person1 = {
//     name: 'Pera',
//     age: 13,
//     email: 'dskfjs'
// }

// let person2 = {
//     name: 'jhf',
//     age: 34,
//     email: 'dsjfksf'
// }

// if(person2.age >= 18){
//     console.log(persno2)
// }

let acc1 = {
    username: 'pera',
    age: 17
}
let acc2 = {
    username: 'zika',
    age: 32
}
let acc3 = {
    username: 'ana',
    age: 24
}
let acc4 = {
    username: 'lana',
    age: 37
}

let accounts = [acc1,acc2,acc3,acc4,{username: 'test',age: 16}]

// accounts.forEach(acc => {
//     if(acc.age >= 18){
//         console.log(acc , 'је пунолетан')
//     }
// })

for(let i = 0; i < accounts.length; i++){
    if(accounts[i].age >= 18){
        console.log(accounts[i] , 'је пунолетан')
    }
}
// let accounts = [acc1,acc2,acc3,acc4,{username: 'test',age: 16}]

function punoletan(дфкхјлгхј){
    return дфкхјлгхј.age >= 18
}


// let niz = [234,123,5,532,32,23]
let punoletni = accounts.filter(punoletan)
console.log(punoletni)

let maloletni = accounts.filter(acc => acc.age < 18)
console.log(maloletni)

// let usernames = []

// accounts.forEach(x => {
//     usernames.push(x.username)
// })

let usernames2 = accounts.map(acc => acc.username)
console.log(usernames2)

//1. Филтрирати само позитивне
//2. дељиве са 3

let niz = [234,-123,5,532,-32,23]





