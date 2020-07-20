var x = 5
x = 3 // var може да се мења
console.log(x) // Види се у scope-у у ком се налази

const y = 4
// y = 2 // const не може да се мења
console.log(y)

let z = 7
z = 4  // let може да се мења
console.log(z)

{
    var x2 = 5
}
console.log(x2) // var се види и ван scope-а у ком је направљен 

{
    const y2 = 3
}
//console.log(y2); // const се не види ван scope-a у ком је направљен

{
    let z2 = 5
}
//console.log(z2); // let се не види ван scope-a у ком је направљен


// Number("423") - Експлицитна конверзија
// "42" - 3    - Имплицитна конверзија