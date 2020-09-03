// Користећи петљу исписати све људе (for / forEach)
{
    let ljudi = ['Pera','Ana','Zika','Lana']

    function ispisiJednog(covek){
        console.log(covek)
    }

    ljudi.forEach(ispisiJednog)

    // ljudi.forEach((el) => {
    //     console.log(el)
    // })
}

// Уклонити 'Pera' из низа
{
    let ljudi = ['Pera','Ana','Zika','Lana']
    // ljudi.shift()
    ljudi.splice(0,1)
    console.log(ljudi)
}

// Уклонити 'Lana' из низа
{
    let ljudi = ['Pera','Ana','Zika','Lana']
    // ljudi.pop()
    ljudi.splice(3,1)
    console.log(ljudi)
}

// Додати 'Mika' на почетак
{
    let ljudi = ['Pera','Ana','Zika','Lana']
    ljudi.unshift('Mika')
}

// Додати 'Mika' на крај
{
    let ljudi = ['Pera','Ana','Zika','Lana']
    ljudi.push('Mika')
}

// Исписати све људе, али изаћи из петље кад се стигне до 'Ana'
// Исписати све људе, али прескочити 'Ana'
{
    let ljudi = ['Pera','Ana','Zika','Lana']

    for(let i = 0; i < ljudi.length; i++){
        if(ljudi[i] === 'Ana')
            break
        console.log(ljudi[i])
    }
    for(let i = 0; i < ljudi.length; i++){
        if(ljudi[i] === 'Ana')
            continue
        console.log(ljudi[i])
    }

}

// Наћи 'Zika' у низу (тј његову позицију)
{
    let ljudi = ['Pera','Ana','Zika','Lana']
    // let index = ljudi.indexOf('Zika')
    let index = -1
    for(let i = 0; i < ljudi.length; i++){
        if(ljudi[i] === 'Zika'){
            index = i
            break
        }
    }
    ljudi.splice(index,1)
    console.log(ljudi)
}

let x = [31,34,898,54,35,3,435,34,5,345,34,5,34,534,5,34243,34,5]

// CS50x
// MIT - Algorithms

sum += x.pop()