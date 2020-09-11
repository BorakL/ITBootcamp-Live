import React, { useState } from 'react'

const PersonForm = ({ persons, setPersons }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [error,setError] = useState('')

    const isValid = (name, number) => name !== '' &&
                                      number !== '' &&
                                      number[0] === '+' &&
                                      number.length === 13 &&
                                      !Number.isNaN(Number(number.slice(1)))

    const isDuplicate = (name) => persons.some(el => el.name === name)

    const replaceContact = (name) => {
        let tmp = [...persons]
        let index = tmp.findIndex(el => el.name === name)
        tmp.splice(index,1,{ name:name, number:phone })
        setPersons(tmp)
    }

    const addContact = (e) => {
       e.preventDefault()
       if(isValid(name,phone)){
           if(isDuplicate(name)){
               if(window.confirm(`Контакт: ${name} већ постоји, да ли желите да замените број?`)){
                    replaceContact(name)
               }
           }
           else{
               setPersons(persons.concat({name:name, number:phone}))
           }
       }
       else{
           if(name === '') setError('Име не сме бити празно')
           else if(phone[0] !== '+') setError('Број мора почињати са +')
           else setError('Грешка у уносу')

           setTimeout(() => {
               setError('')
           },1555)
       }
    }

    return (
        <form onSubmit={addContact}>
            <div>
                Име: <input onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                Број: <input onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <button type="submit">Додај</button>
            </div>
            <p>{error}</p>
        </form>
    )

}


export default PersonForm