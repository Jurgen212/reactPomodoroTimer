import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { getDataLocalStorage, saveDataLocalStorage } from '../../../helpers/manipulateLocalStorage'

import { ClockContext } from '../../context/ClockContext'
import '../styles/stylePomodoroAndUserConfig.css'


export const FormularioConfigPomodoro = () => {

    const { minutos, setMinutos } = useContext( ClockContext )
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        
        //TODO investigar porque el useEffect no me queria cambiar el estado de "minutos"
        const dataDesdeLocal = getDataLocalStorage("minutos")
        if( dataDesdeLocal !== null ) {

            setMinutos( dataDesdeLocal )
             
            
            setValue("minutosFocus"         ,   dataDesdeLocal.minutosFocus           )
            setValue("minutosDescanso"      ,   dataDesdeLocal.minutosDescanso        )
            setValue("minutosDescansoLargo" ,   dataDesdeLocal.minutosDescansoLargo   )
            return;
        }
        
        setValue("minutosFocus"         , minutos.minutosFocus          )
        setValue("minutosDescanso"      , minutos.minutosDescanso       )
        setValue("minutosDescansoLargo" , minutos.minutosDescansoLargo  )
    }, [])

    
    
    const handleChange = ( data )  =>{
        
        const objectoDatosInputs = {
            minutosFocus        : parseInt( data.minutosFocus ),
            minutosDescanso     : parseInt( data.minutosDescanso ),
            minutosDescansoLargo: parseInt( data.minutosDescansoLargo )
        }

        saveDataLocalStorage( "minutos", objectoDatosInputs )
        setMinutos( objectoDatosInputs )
    }

    return (
        <>
            <form   className='formConfigs'>

                <span style={{ color: "black", fontSize: "20px" }}>Tiempo de enfoque: { minutos.minutosFocus } </span>
                <input  type="range" 
                        min = "5" 
                        max = "60" 
                        step = "1" 
                        className='inputsRange'
                        onClick={ handleSubmit( handleChange ) }
                        { ...register('minutosFocus' )}/>

                <span style={{ color: "black", fontSize: "20px"}}>Tiempo de descanso: { minutos.minutosDescanso }</span>
                <input  type="range" 
                        min = "5" 
                        max = "60" 
                        step = "1" 
                        className='inputsRange'
                        onClick={ handleSubmit( handleChange ) }
                        { ...register('minutosDescanso' )}/>

                <span style={{ color: "black", fontSize: "20px"}}>Tiempo de descanso largo: { minutos.minutosDescansoLargo} </span>
                <input  type="range" 
                        min = "5" 
                        max = "60" 
                        step = "1" 
                        className='inputsRange'
                        onClick={ handleSubmit( handleChange ) }
                        { ...register('minutosDescansoLargo' )}/>
            </form>
        </>
    )
}
    