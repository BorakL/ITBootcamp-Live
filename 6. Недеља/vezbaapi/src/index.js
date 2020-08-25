import { getAllUsers, getUser, postUser, postUser2, registerUser } from './service';

console.log('Hello project');

// Promise
// Pending, Resolved

// fetch
// JSON - JavaScript Object Notation

// API - Application programming interface

// HTTP Захтеви
// GET - За дохватање података са сервера
// axios.get(link)

// POST - Слање података серверу
// axios.post(link,data)

// PUT - Слање података серверу
// axios.put(link,data)

// PATCH

// DELETE - Брисање неких података
// axios.delete(link)

// function dohvatiPodatke(){
//     ...
// }

// let objekat = dohvatiPodatke()
const app = document.querySelector('#app')

getUser(10)
        .then(res => {
            let p = document.createElement('p')
            p.textContent = res.data.data.email
            app.appendChild(p)
            console.log(res.data.data)

            getAllUsers()
                .then(res => {
                    res.data.data.forEach(el => {
                        let p = document.createElement('p')
                        p.textContent = el.email
                        app.appendChild(p)
                    })
                console.log(res.data.data)
            })
        })

postUser('pera')
        .then(res => console.log(res))
        .catch(error => console.log(error))


let user = {
    name: 'pera',
    job:'dskfs',
    age: 34,
    salary: 3242342,
    country: 'rs'
}

postUser2(user)
        .then(res => {
            console.log(res)
        })

registerUser('eve.holt@reqres.in')
        .then(res => console.log(res.data.token))
        .catch(error => {
            console.log(error.response)
            let p = document.createElement('p')
            p.textContent = error.response.data.error
            app.appendChild(p)
        })








