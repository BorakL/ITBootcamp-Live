// Аритметички оператори - +, -, *, /, %, ++, --

console.log("5 + 3 =" , 5 + 3);
// ... 
console.log("0 % 3 =", 0 % 3);
console.log("1 % 3 =", 1 % 3);
console.log("2 % 3 =", 2 % 3);
console.log("3 % 3 =", 3 % 3);
console.log("4 % 3 =", 4 % 3); 
console.log("5 % 3 =", 5 % 3); // 5 - 3 * 1 = 2

{
    let x = 5
    x++
    console.log("x je:" , x)
}

{
    let x = 5
    x--
    console.log("x je:" , x)
}

{
    let x = 5
    console.log("x je:" , x++) // Post increment

    let y = x++
    console.log(y , x)
}

{
    let x = 5
    let y = x++

    // let x = 5
    // let y = 5
    // x = x + 1
}

{
    let x = 5
    let y = ++x

    // let x = 5
    // x = x + 1
    // let y = x
}


{
    let x = 5
    console.log("x je:" , ++x) // Pre increment

    let y = ++x
    console.log(y , x)
}

// typeof оператор

{
    let x = 5
    console.log("x je:",typeof x)

    x = "Hello world"
    console.log("x je:",typeof x)

    x = true
    console.log("x je:",typeof x)

    let y = "5"
    let z = 3
    console.log(typeof(y+z))
}

// Оператори поређења - < , > , <= , >=, ==, ===, != , !==
{
    console.log("5 < 3", 5 < 3)
    // console.log("5 > 3", 5 > 3)
    // console.log("5 <= 3", 5 <= 3)
    // console.log("5 >= 3", 5 >= 3)
    // console.log("5 == 3", 5 == 3)
    // console.log("5 != 3", 5 != 3)
    // console.log("5 === 3", 5 === 3)
    // console.log("5 !== 3", 5 !== 3)
    // console.log("3 < 3", 3 < 3)
    // console.log("3 <= 3", 3 <= 3)
    // console.log("3 == 3", 3 == 3)
    // console.log("3 === 3", 3 === 3) // Додатно проверава тип података
    // console.log("'3' == 3", '3' == 3)
    // console.log("'3' === 3", '3' === 3)
    console.log("3 !== 3", 3 !== 3)
    console.log("3 != 3", 3 != 3)
    console.log("'3' != 3", '3' != 3)
    console.log("'3' !== 3", '3' !== 3)
}

// Логички оператори -  && , || , !
{
    let a = 5, b = 3
    let c = 4

    console.log("!(5 == 5)" , !(5 == 5))

    console.log("(a >= b) && (c == b)",(a >= b) && (c == b))
    console.log("(a >= b) || (c == b)",(a >= b) || (c == b))
}

// Оператори доделе ,  = , += , -= , /=, *= , %=

{
    let x = 5 + 3 * 42
}