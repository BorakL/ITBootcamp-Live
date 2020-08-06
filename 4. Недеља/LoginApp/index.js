const users = [
    {
        username: 'admin',
        password: 'admin',
        isAdmin: true
    },
    {
        username: 'John',
        password: '123456',
        isAdmin: false,
        coins: 7
    },
    {
        username: 'Kelly',
        password: 'asdf1234',
        isAdmin: false,
        coins: 12
    },
    {
        username: 'Pera',
        password: '1234asdf',
        isAdmin: false,
        coins: 42
    },
    {
        username: 'Ana',
        password: 'fghfhf',
        isAdmin: false,
        coins: 31
    }
]

const divUsers = document.querySelector('#users')
const forma = document.querySelector('#login')
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')

users.forEach(user => {
    if(user.isAdmin) return

    const p = document.createElement('p')
    p.textContent = user.username + ' ' + user.coins

    divUsers.append(p)
})
// '    gdfg  dfsfs    '
// 'gdfg  dfsfs'

// '           '
// ''
forma.addEventListener('submit', e =>{
    e.preventDefault()
    // Ни један инпут не сме бити празан (не сме садржати ни само белине (space,tab))
    if(usernameInput.value.trim().length === 0 || passwordInput.value.trim() === ''){
        alert('Не сме празан унос')
        return
    }
    // Да ли корисник већ постоји
    
    // Ако постоји, да ли је шифра добра (Ако је добра шифра, улоговати . Иначе, исписати поруку)

    // Ако не постоји, направити новог - И улоговати га са тим подацима


})


