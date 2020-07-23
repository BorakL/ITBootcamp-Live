// let x = 123

// let j = x % 10
// console.log(j)

// let d = Math.floor(x / 10) % 10
// console.log(d)

// let s = Math.floor(x / (10 * 10)) % 10
// console.log(s)

// Одредити да ли је задат троцифрен број Армстронгов
// Број је Армстронгов ако је једнак збиру кубова његових цифара
// 153 = 1^3 + 5^3 + 3^3

// let x = 457

// let j = x % 10
// let d = Math.floor(x / 10) % 10
// let s = Math.floor(x / (10 * 10)) % 10

// let zbir = j ** 3 + Math.pow(d,3) + s ** 3

// if(zbir === x){
//     console.log('jeste')
// }
// else{
//     console.log('nije')
// }

let x = 407
let tmp = x
let zbir = 0

while(x !== 0){
    let c = x % 10
    x = Math.floor(x / 10)
    zbir += c ** 3
    console.log(c)
}

if(tmp === zbir){
    console.log('Jeste')
}
else{
    console.log('nije')
}


