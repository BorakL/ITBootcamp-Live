// Када је година преступна:

// број године дељив са четири, и
// важи једно од следећа два:
// број године није дељив са 100
// број године је дељив са 400

// let godina = 2401

// if(godina % 4 === 0 && (godina % 100 !== 0 || godina % 400 === 0)){
//     console.log(`Година ` + godina + ` јесте преступна`)
// }
// else{
//     console.log(`Година ${godina} није преступна`)
// }


// Написати програм који 5 пута исписује Hello World!
// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');

// while, for, do-while
{
    let N = 5
    while(N > 0){
        console.log('Hello World!')
        N--
    }
}
{
    let N = 5
    for(let i = 0; i < N; i++){
        console.log('Hello World!')
    }
}

// Написати програм који исписује бројеве од M до N (Укључујући оба)
{
    let N = 21
    let M = 13
    for(let i = M; i <= N; i++){
        console.log(i)
    }
    // console.log('i nakon petlje' , i)
}
{
    let M = 13
    let N = 123
    let i = M

    while(i <= N){
        if(i < 50){
            console.log(i)
        }
        else{
            console.log('Овај број је већи од 50')
        }

        i++
    }

    console.log(`Ово су били бројеви од ${M} до ${N}`)
}


// Исписати бројеве од M до N, дељиве са 3
{
    let M = 12
    let N = 123
    
    for(M; M <= N; M++){
        if(M % 3 === 0){
            console.log(M)
        }
    }

    // while(M <= N){
    //     if(M % 3 === 0){
    //         console.log(M)
    //     }
    //     M++
    // }


}