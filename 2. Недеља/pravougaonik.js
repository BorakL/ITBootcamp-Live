/*
Написати проограм који за унето N исписује квадрат

нпр. N = 5

*****
*****
*****
*****
*****

*/
{
    let N = 21
    let red = ''

    for(let i = 0; i < N; i++){
        red += '*'
    }

    for(let i = 0; i < N; i++){
        console.log(red)
    }
}
console.log('---------------------------------------------')

/*
Написати проограм који за унето N и M исписује квадрат

нпр. N = 10 , M = 5


**********
**********
**********
**********
**********

*/
{
    let N = 5
    let M = 10
    let red = ''

    for(let i = 0; i < N; i++){
        red += '*'
    }

    for(let i = 0; i < M; i++){
        console.log(red)
    }
}
console.log('---------------------------------------------')

/*
Написати проограм који за унето N и M исписује квадрат

нпр. N = 10 , M = 5


**********
*        *
*        *
*        *
**********

*/

{
    let N = 7
    let M = 13
    let poklopac = ''
    let red = ''

    for(let i = 0; i < N; i++){
        poklopac += '*'
    }

    red += '*'

    for(let i = 0; i < N - 2; i++){
        red += ' '
    }

    red += '*'

    console.log(poklopac)

    for(let i = 0; i < M - 2; i++){
        console.log(red)
    }

    console.log(poklopac)



}