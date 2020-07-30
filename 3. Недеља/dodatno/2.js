// N = 5
//      *
//     ***
//    *****
//   *******
//  **** ****
//   *******
//    *****
//     ***
//      *


// N = 4

//    *
//   ***
//  *****
// *** ***
//  *****
//   ***
//    *

let N = 10
let red = ''

let brZvezdica = 1

for(let i = 0; i < (N - 1); i++){
    red = ' '.repeat(N - i - 1) + '*'.repeat(brZvezdica)
    brZvezdica += 2
    console.log(red)
}

brZvezdica -= 2
let srednji = '*'.repeat(N - 1) + ' ' + '*'.repeat(N - 1)

console.log(srednji)

for(let i = N - 1; i > 0; i--){
    red = ' '.repeat(N - i) + '*'.repeat(brZvezdica)
    brZvezdica -= 2
    console.log(red)
}





