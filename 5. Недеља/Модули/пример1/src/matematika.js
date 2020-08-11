// export function obim(a,b = a){
//     return 2*a + 2*b
// }

// export function povrsina(a,b = a){
//     return a * b
// }

// export function avg(N,M){
//     let suma = 0
//     let count = 0
//     for(let i = N; i < M; i++){
//         suma += i
//         count++
//     }
//     return suma / count
// }

// export default function mnozenje(){
//     console.log('kjsfjksdf')
// }



function obim(a,b = a){
    return 2*a + 2*b
}

function povrsina(a,b = a){
    return a * b
}

function avg(N,M){
    let suma = 0
    let count = 0
    for(let i = N; i < M; i++){
        suma += i
        count++
    }
    return suma / count
}

const niz = [1,2,3,4,5,5]

let x = 5

const fkjdd = {
    avg: avg,
    obim: obim,
    povrsina: povrsina,
    brojevi: niz,
    x: x,
}

export default fkjdd
