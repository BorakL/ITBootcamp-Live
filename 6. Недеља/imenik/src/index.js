// селектујемо форму
// селектујемо именик

// додамо eventListener на форму
let imenik = [
    {
        name: 'Пера',
        number: '+381 614567891'
    },
    {
        name: 'Жика',
        number: '+381 614567821'
    }
]

// 1. Брише све постојеће
// 2. Исписује све из низа
const renderList = (list) => {

}

const isValid = () => {

}

const isDuplicate = (name,number) => {

}

const errorMessage = () => {

}

const addItem = (name,number) => {
    if(isValid()){
       if(isDuplicate(name,number)){
            if(confirm(`Да ли желите да замените број корисника ${name}`)){
                let index = imenik.findIndex(item => item.name == name)
                imenik.splice(index,1,{name,number})
            }
       } 
       else{
           imenik.push({name,number})
       }
    }
    else{
       console.log('грешка')
       errorMessage()
    }

    renderList()
}

