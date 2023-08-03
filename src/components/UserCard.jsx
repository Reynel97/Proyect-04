import './style/UserCard.css'
import 'animate.css';

const UserCard = ({ user, setUpdateInfo, setCloseForm, getUsersDelete}) => {


const handleUpdate = () => {
    setUpdateInfo( user )
    setCloseForm(false)
}

  return (
    <article className={'carduser-container'}>
        <h2 className="carduser__title">{`${user.first_name} ${user.last_name}`}</h2>
        <hr className="carduser__line"/>
        <ul className="carduser__list">
            <li className="carduser__item">
                <span className="carduser__label">Email</span>
                <span className="carduser__text">{ user.email }</span>
            </li>
            <li className="carduser__item">
                <span className="carduser__label">Birthday</span>
                <span className="carduser__text"><i className='bx bx-gift'></i>{ user.birthday}</span>
            </li>
        </ul>
        <hr className="carduser__line"/>
        <footer className="carduser__footer">
            <button className='btn__usercard' onClick={()=> getUsersDelete(user)}><i className='bx bx-trash'></i></button>
            <button  className='btn__usercard' onClick={ handleUpdate }><i className='bx bx-edit'></i></button>
        </footer>
    </article>
  )
}

export default UserCard