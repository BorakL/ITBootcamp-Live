import axios from 'axios'
import { getAllUsers } from './service';

console.log('Hello project');

// Promise
// Pending, Resolved

// API - Application programming interface

// HTTP Захтеви
// GET - За дохватање података са сервера
// POST - Слање података серверу
// PUT - Слање података серверу
// DELETE - Брисање неких података

// function dohvatiPodatke(){
//     ...
// }

// let objekat = dohvatiPodatke()
const app = document.querySelector('#app')

console.log(
    axios.get('https://reqres.in/api/users/10')
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
    )






