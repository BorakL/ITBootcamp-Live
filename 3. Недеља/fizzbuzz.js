for(let i = 1; i <= 1000; i++){
    let poruka = ''
    if(i % 3 === 0){
        poruka += 'Fizz'
    }
    if(i % 5 === 0){
        poruka += 'Buzz'
    }
    if(i % 7 === 0){
        poruka += 'Zazz'
    }
    if(poruka.length === 0){
        poruka = i
    }
    console.log(poruka)
}