// function saberi(a,b){
//     console.log(a,b)
//     return a + b
// }

// const saberi = (a,b) => {
//     return a + b
// }

const max = (a,b) => a > b ? a : b

// function maxOdTri(x,y,z){
//     if(x >= y && x >= z)
//         return x
//     if(y >= z)
//         return y
//     else return z
// }

const f  = (x,y,z) => (x >= y && x >= z) ? x : (y >= z) ? y : z

let niz = [5,234,6,2,-23,34]

console.log(niz.reduce((total,curr) => total - curr,1000))
console.log(f(13,5,12))

let zbir = 1000
niz.forEach(x => {
    zbir -= x
})
console.log(zbir)

// for(let i = 0; i < niz.length; i++){
//     console.log(niz[i])
// }





