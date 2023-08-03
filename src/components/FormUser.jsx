import { useForm } from "react-hook-form";
import { useEffect } from "react";
import swal from "sweetalert2";
import './style/FormUser.css'
import 'animate.css';


const FormUser = ( 
  { createUser, 
    updateInfo, 
    updateUserById, 
    setUpdateInfo, 
    closeForm, 
    setCloseForm } ) => {


  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset( updateInfo )
  }, [ updateInfo ]);

  const submit = ( data ) => {
    if( updateInfo ){
      updateUserById( '/users', updateInfo.id, data )
      setUpdateInfo()
    }else{
      createUser( '/users',data )
    }
   
    reset({
      first_name:'',
      last_name: '',
      email: '',
      password: '',
      birthday: ''
    })
  };

  const handleCloseForm = () => {
    setCloseForm( true )
  }
  const toast = swal.mixin({
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


  const handleConfirm = () => {
    if(updateInfo) {
      toast.fire({
        title: 'Usuario Actualizado',
        icon: 'success',
        showConfirmButton: false,
        timer:'2000'
      })
    }else{
      toast.fire({
        title: 'Usuario Creado',
        icon: 'success',
        showConfirmButton: false,
        timer:'2000'
      })
    }
  }

  return (
    <div onClick={ handleCloseForm } className={`formuser-container ${ closeForm && 'close-form' }`}>
    <form onClick={e => e.stopPropagation()} className='formuser' onSubmit={handleSubmit( submit )}>
      <h2 className='formuser__title'>New User</h2>
      <div className='formuser__close' onClick={ handleCloseForm }>X</div>
      <div className='formuser__group'>
        <label className='formuser__label' htmlFor="first_name">First Name:</label>
        <input className='formuser__input' {...register('first_name', { required: true, maxLength: 20 })} type="text" id="first_name" />
      </div>
      <div className='formuser__group'>
        <label className='formuser__label' htmlFor="last_name">Last Name:</label>
        <input className='formuser__input' {...register('last_name', { required: true, maxLength: 20 })} type="text" id="last_name" />
      </div>
      <div className='formuser__group'>
        <label className='formuser__label' htmlFor="email">Email:</label>
        <input className='formuser__input' {...register('email', {required: true})} type="email" id="email" />
      </div>
      <div className='formuser__group'>
        <label className='formuser__label' htmlFor="password">Password:</label>
        <input className='formuser__input' {...register('password',{ required: true, minLength:6, maxLength: 16 })} type="password" id="password" />
      </div>
      <div className='formuser__group'>
        <label className='formuser__label' htmlFor="birthday">Birthday:</label>
        <input className='formuser__input' {...register('birthday', {required: true})} type="date" id="birthday" />
      </div>
      <button onClick={handleConfirm} className='formuser__btn'>{ updateInfo ? 'Update a new user' : 'Add a new user' }</button>
    </form>
    </div>
  );
};

export default FormUser;
