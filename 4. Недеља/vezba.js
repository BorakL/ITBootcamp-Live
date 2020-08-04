const navMenu = ['Home','About','Contact','Portfolio','Test']

const divVezba = document.querySelector('#vezba')

const navigacija = document.createElement('nav')
const lista = document.createElement('ul')

navMenu.forEach(el => {
    let li = document.createElement('li')
    let a = document.createElement('a')

    a.textContent = el
    a.href = '#' + el.toLowerCase()

    li.appendChild(a)
    lista.appendChild(li)
})

// for(let i = 0; i < 3; i++){
//     let li = document.createElement('li')
//     let a = document.createElement('a')

//     switch(i){
//         case 0:
//             a.href = '#home'
//             a.textContent = 'Home'
//             break
//         case 1:
//             a.href = '#about'
//             a.textContent = 'About'
//             break
//         case 2:
//             a.href = '#contact'
//             a.textContent = 'Contact'
//             break
        
//     }

//     li.appendChild(a)
//     lista.appendChild(li)
// }

navigacija.appendChild(lista)
divVezba.appendChild(navigacija)


// <form>
//     <select name="cars" id="cars">
//         <optgroup label="Swedish Cars">
//             <option value="volvo">Volvo</option>
//             <option value="saab">Saab</option>
//         </optgroup>
//         <optgroup label="German Cars">
//             <option value="mercedes">Mercedes</option>
//             <option value="audi">Audi</option>
//         </optgroup>
//     </select>
//     <input type="hidden" name="strana" value="15" />
//     <input type="text" name="nesto">
//     <input type="submit" name="submit" value="Потврди" />
// </form> 

const forma = document.createElement('form')

const par = document.createElement('p')
par.textContent = 'Ово је неки параграф'
forma.appendChild(par)

const labelCars = document.createElement('label')
labelCars.htmlFor = 'cars'
labelCars.textContent = 'Choose a car:'
forma.appendChild(labelCars)

const sb = document.createElement('select')
sb.name = 'cars'
sb.id = 'cars'

    const optGroup1 = document.createElement('optgroup')
    optGroup1.label = 'Swedish Cars'

    const swedishCars = ['Volvo','Saab']
    swedishCars.forEach(car => {
        const option = document.createElement('option')
        option.textContent = car
        option.value = car.toLowerCase()
        optGroup1.appendChild(option)
    })
    sb.appendChild(optGroup1)

    const optGroup2 = document.createElement('optgroup')
    optGroup2.label = 'German Cars'

    const germanCars = ['Mercedes','Audi']
    germanCars.forEach(car => {
        const option = document.createElement('option')
        option.textContent = car
        option.value = car.toLowerCase()
        optGroup2.appendChild(option)
    })
    sb.appendChild(optGroup2)

forma.appendChild(sb)

const input1 = document.createElement('input')
input1.type = 'hidden'
input1.name = 'strana'
input1.value = '15'
forma.appendChild(input1)


divVezba.appendChild(forma)







