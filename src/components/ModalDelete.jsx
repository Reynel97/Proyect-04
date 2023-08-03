import Swal from 'sweetalert2'
import 'animate.css';
import './style/ModalDelete.css'


const ModalDelete = ({closeModal,deleteUserById, userDelete, isOpen}) => {

    const confirmModal = () => {
      const animateDelete = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      
      animateDelete.fire({
        title: 'Usuario Eliminado',
        icon: 'success',
        showConfirmButton: false,
        timer:'2000'
      })
    }
    
      const handleDelete = () => {
        deleteUserById('/users', userDelete.id)
        closeModal()
        confirmModal()
    }


  return (
    <div className={`modal-container ${!isOpen && 'is-open'}`}>
        <div className="modal__content">
            <h2 className="modal__title">¿Deseas eliminar a {userDelete?.first_name}?</h2>
            <p className='modal__text'>Esta acción no se puede deshacer.</p>
            <footer className='modal__footer'>
            <button className='btn__modal warning' onClick={handleDelete}>Eliminar</button>
            <button className='btn__modal cancel' onClick={()=>closeModal()}>Cancelar</button>
            </footer>
        </div>
    </div>
  )
}

export default ModalDelete