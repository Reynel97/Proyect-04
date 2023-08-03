
import './App.css'
import FormUser from './components/FormUser'
import ModalDelete from './components/ModalDelete'
import UserCard from './components/UserCard'
import useFetch from './hooks/useFetch'
import { useEffect, useState } from 'react'

function App() {

  const [updateInfo, setUpdateInfo] = useState();
  const [closeForm, setCloseForm] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [userDelete, setUserDelete] = useState();
 
  const baseUrl = 'https://users-crud.academlo.tech'

  const [ 
    users, 
    getUsers, 
    createUser, 
    deleteUserById, 
    updateUserById 
  ] = useFetch( baseUrl, setCloseForm)

  useEffect(() => {
    getUsers('/users')
    
  }, []);

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  const closeModal = () => {
    setIsOpen( false )
    setUserDelete()
  }


  const getUsersDelete = (users) => {
    setIsOpen( true )
    setUserDelete( users )
  }

  return (
    <div className='wrapper'>
      <nav className='nav__wrapper'>
      <h1 className='title__wrapper'>Usuarios</h1>
      <h2 className='length__wrapper'>Usuarios creados: {users?.length}</h2>
      <button className='btn__wrapper' onClick={handleOpenForm}><i className='bx bx-plus' ></i></button>
      </nav>
      <FormUser 
      createUser = { createUser }
      updateInfo = { updateInfo }
      updateUserById = { updateUserById }
      setUpdateInfo = { setUpdateInfo }
      closeForm = { closeForm }
      setCloseForm = { setCloseForm }
      />
    
      <div className='card-user'>
        
        {
          users?.map( (user) => (
            <UserCard 
            user = { user }
            key={ user.id }
            setUpdateInfo = { setUpdateInfo }
            setCloseForm = { setCloseForm }
            getUsersDelete={getUsersDelete}
            />
          ))
        }
      </div>
      <ModalDelete
          userDelete={userDelete}
          deleteUserById={deleteUserById}
          closeModal = { closeModal }
          isOpen = {isOpen}
      />
    </div>
  )
}

export default App
