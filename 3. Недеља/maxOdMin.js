// Фунцкија која враћа максимум од 3 броја

// function maxOdTri(x,y,z){
//     if(x >= y && x >= z)
//         return x
//     if(y >= z)
//         return y
//     else return z
// }

function maxOdTri2(x,y,z){
    return -Math.min(-x,-y,-z)
}

console.log(maxOdTri2(26,44,21))