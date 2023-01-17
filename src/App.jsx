import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import UsersForm from './components/UsersForm'
import './App.css'
import UsersList from './components/UsersList'
import axios from 'axios'

function App() {

  
const [userslist, setUserslist] = useState([])
const [ usersSelected, setUsersSelected] = useState(null)

useEffect (() => {

  axios.get ("https://users-crud.academlo.tech/users/")
  .then( res => setUserslist(res.data))
}, [])

console.log(userslist)

const getUsers =() =>{
  axios.get ("https://users-crud.academlo.tech/users/")
  .then( res => setUserslist(res.data))

}



const addUsers  = (user) => {
  axios.post ("https://users-crud.academlo.tech/users/", user)
  .then(() => getUsers())
  //setUserslist([...userslist, user])  
}


const deleteUsers = (usersdelete) => {
  axios.delete(`https://users-crud.academlo.tech/users/${usersdelete.id}/`)
  .then(() => getUsers())
  //const filteredUsers = userslist.filter(users => users.id !== usersdelete.id)
//setUserslist(filteredUsers)
}

const selectUsers = (user) => {
  setUsersSelected(user)
}

const updateUser = (user) => {
  axios.put(`https://users-crud.academlo.tech/users/${usersSelected.id}/`, user)
  .then(() => {
    getUsers()
    setUsersSelected(null)})
  
   
  //user.id == user.usersSelected
  //const index = userslist.findIndex(user => user.id  === usersSelected.id)
  //userslist[index]=user
  //setUserslist([...userslist])


}
  return (
    <div className="App">

      <UsersForm  addUsers ={addUsers}
      usersSelected = {usersSelected}
      updateUser ={updateUser}
      />
      <UsersList  userslist = {userslist} 
      deleteUsers={deleteUsers}
      selectUsers = {selectUsers}
      />
      
    </div>
  )
}

export default App
