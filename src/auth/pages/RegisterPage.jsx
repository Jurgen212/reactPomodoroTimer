import React, { useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Link } from 'react-router-dom'

import './stylesAuth.css'

import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { startCreateUserWithEmail, startSocialMediaSingIn } from '../../store/auth'
import { SocialMediaOptions } from '../components/SocialMediaOptions'
import { ModalWarning } from '../components/ModalWarning'



const emailPattern    = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
;


export const RegisterPage = () => {

  const { errorMessage } = useSelector( state => state.auth)

  const { register, handleSubmit, formState: { errors }, watch  } = useForm();

  // const { status, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();


  const onSubmit = (data) =>{
    dispatch( startCreateUserWithEmail( data ) );
  } 

  return (

    <AuthLayout>

      {
        ( errorMessage !== null ) && <ModalWarning title ="Error al Registrar usuario"  errorMessage = { errorMessage }/>
      }


      <form onSubmit={ handleSubmit( onSubmit )}
            autoComplete = "off">
          
          <p className='title'>Registrarme</p>
          <div className="form-outline mb-3">
            <input  type="text" 
                    id="form2Example1" 
                    className="form-control" 
                    placeholder='Nombre de usuario'
                    { ...register('displayName', {
                      required: true
                    })}
                    />
            { errors.displayName?.type === 'required' && <span>El nombre es obligatorio</span>}
          </div>

          <div className="form-outline mb-3">
            <input  type="email" 
                    id="form2Example1" 
                    className="form-control" 
                    placeholder='Correo electronico'
                    { ...register('email', {
                      required: true,
                      pattern : {
                        value   : emailPattern,
                        message : "Por favor ingrese una direccion de correo valida" 
                      }
                    }) }
                    />
              { errors.email?.type === 'required' && <span>El correo es obligatorio</span>  }
              { errors.email?.type !== 'required' && <span>{ errors.email?.message }</span> }
          </div>

          <div className="form-outline mb-3">
            <input  type="password" 
                    id="form2Example2" 
                    className="form-control" 
                    placeholder='Contraseña'
                    { ...register('password', {
                      required: true,
                      pattern : {
                        value: passwordPattern,
                        message: "La contraseña debe tener minimo un numero, una mayuscula y minuscula, 6 caracteres y un simbolo especial (@$!%*?&)"
                      }
                    }) }
                    />
                { errors.password?.type === 'required' && <span>La contraseña es obligatorio</span>  }
                { errors.password?.type !== 'required' && <span>{ errors.password?.message }</span> }     
          </div> 

          <div className="form-outline mb-3">
            <input  type="password" 
                    id="form2Example2" 
                    className="form-control" 
                    placeholder='Repita la Contraseña'
                    { ...register( 'passwordConfirm', {
                      required: true,
                      validate: value => value === watch( 'password') || "Las contraseñas no coinciden"
                    })}
                    />
                    { errors.passwordConfirm?.type === 'required' && <span>Repetir la contraseña es obligatorio</span>  }
                    { errors.passwordConfirm?.type !== 'required' && <span>{ errors.passwordConfirm?.message }</span>  }
          </div>




          <button type="submit" 
                  className="btn btn-primary btn-block mb-4">Registrarme</button>

          <div className="text-center">


            <p className='advice'>¿Ya tienes una cuenta? <Link to="/auth/login">Iniciar Sesión</Link></p>

            <SocialMediaOptions/>
          </div>

        </form>
    </AuthLayout>
  )
}
