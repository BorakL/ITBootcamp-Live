let niz = [3,1,33,4,2,3,6123,23,1,3,3,2,32,322]

console.log(niz)

// niz.sort((a,b) => {
//     if(a < b){
//         return -1
//     }
//     if(a == b)
//         return 0
//     return 1
// })
niz.sort((a,b) => a - b) // Merge sort // Quick sort

console.log(niz)

let x = ['1','dssa','1','sds','2131231','dsfsdfsdfs']
console.log(x)

x.sort((a,b) => a.length - b.length)
.filter(el => el % 2 == 0)
.map(el => el ** 2)
 
console.log(x)






