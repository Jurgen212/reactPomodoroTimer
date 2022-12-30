import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/auth'
import { mensajesError } from '../helpers/mensajesError'


import "./styles.css"

export const ModalWarning = ( { title = "Error", errorMessage = ""} ) => {

    const [ mostrar, setMostrar] = useState("flex")    
    const dispatch = useDispatch();

    const errorMensaje = mensajesError( errorMessage );

    const cerrarModal = () =>{
        setMostrar("none");
        dispatch( logout({ errorMessage: null }) );
    }

  return (
    <>
        <div className="container-modal" style={{ display: mostrar}}>
            <div className="content-modal">

                <h2>{ title }</h2>
                <p>{ errorMensaje }</p>

                    <div className="btn-cerrar">
                        <label  htmlFor="btn-modal"
                                onClick={ () => cerrarModal()}>Cerrar</label>
                    </div>
            </div>
            <label htmlFor="btn-modal" className="cerrar-modal"></label>
        </div>
    </>
  )
}
