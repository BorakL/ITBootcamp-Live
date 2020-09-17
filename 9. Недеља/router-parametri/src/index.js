import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams } from 'react-router-dom'

const List = ({ users }) => {
  return (
    <>
      {users.map(user => {
        return (<div key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
          <br />
        </div>)
      })}
    </>
  )
}

const User = ({users}) => {
  const id = useParams().id
  console.log(users)
  const user = users.find(el => el.id === Number(id))
  return (
    <>
    {user ? <p>{user.name} ||| {user.age}</p> : <p>Корисник са ID: {id} не постоји</p>}
    </>
  )
}




const App = () => {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Pera',
      age: 13
    },
    {
      id: 2,
      name: 'Ana',
      age: 32
    },
    {
      id: 3,
      name: 'Zika',
      age: 23
    }
  ])

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <List users={users} />
          </Route>
          <Route path="/user/:id">
            <User users={users} />
          </Route>
        </Switch>
      </Router>

    </>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)


// const getCountryByName = (name) => {
//   return axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
// }

// const Country = () => {
//   const name = useParams().name
//   const [country,setCountry] = useState(null)
//   useEffect(() => {
//     getCountryByName(name).then(res => {
//       setCountry(res.data)
//     })
//   },[])
//   return country ? (
//     <>
//       <img src={country.flag} alt="zastava" />
//       <p>{country.name}</p>
//       <p>{country.population}</p>
//       <p>{country.domain}</p>
//     </>
//   )
//     :
//     <>
//       <p>Није учитано</p>
//     </>
  
// }