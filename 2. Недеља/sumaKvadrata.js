// // За унето К, израчунати и исписати:
// // S = 1² + 3² + 5² + ... + K²

// let K = 5
// let S = 0

// for(let i = 1; i <= K; i+=2){
//     console.log('Број i у овом тренутку износи:',i)
//     S += Math.pow(i,2)
//     console.log('S је',S)
// }
// console.log(S)


// 2² + 4² + 6² + ... + (2n)²
let n = 12 // 2 4 6 8 10 12 14 16 18 20 22
let S = 0
let brojac = 0
for(let i = 2; i <= 2*n; i += 2){
    S += i ** 2
    brojac++
}
let prosecnaVrednost = S / brojac

console.log(S,prosecnaVrednost)







