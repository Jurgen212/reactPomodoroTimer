import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import './stylesAuth.css'


import { Link } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

import { useDispatch, useSelector  } from 'react-redux'
import { startSingInWithEmail } from '../../store/auth'
import { SocialMediaOptions } from '../components/SocialMediaOptions'
import { ModalWarning } from '../components/ModalWarning'


export const LoginPage = () => {

  const { errorMessage } = useSelector( state => state.auth)

  const { register, handleSubmit, formState: { errors }  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = ( data ) =>{

    dispatch( startSingInWithEmail( data ));
  }
  
  return (

      <>
      <AuthLayout>
        
        {
          errorMessage !== null && <ModalWarning title = "Error al Iniciar Sesión"  errorMessage = { errorMessage }/>
        }
        
        <form onSubmit={ handleSubmit( onSubmit )}
              autoComplete = "off">
          
          <p className='title'>Iniciar Sesión</p>
          <div className="form-outline mb-4">


            <input  type        ="email" 
                    id          ="form2Example1" 
                    className   ="form-control" 
                    placeholder ='Correo electronico'
                    { ...register('email',
                    { required: {
                      value: true,
                      message: 'El correo es obligatorio'
                    } })}
                    />
              { errors.email?.type === 'required' && <span>{ errors.email?.message }</span>}
          </div>

          <div className="form-outline mb-4">
            <input  type        ="password" 
                    id          ="form2Example2" 
                    className   ="form-control" 
                    placeholder ='Contraseña'
                    { ...register('password',{
                      required: {
                        value: true,
                        message: 'Contraseña es obligatoria'
                      }
                    })}
                    />
            { errors.password?.type === 'required' && <span>{ errors.password?.message }</span>}
          </div>

          <button type      ="submit" 
                  value     ="enviar"
                  className ="btn btn-primary btn-block mb-4">Iniciar sesión</button>

          <div className="text-center">

            <p className='advice'>¿Aún no tienes una cuenta? <Link to="/auth/register">Registrarme</Link></p>
            

            <SocialMediaOptions/>
          </div>
        </form>
      </AuthLayout>
      </>
          
  )
}
