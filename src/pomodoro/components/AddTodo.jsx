import React, { useRef } from 'react'
import { useAddTodo } from '../hooks/useAddTodo'
import './styles/styleTodos.css'

export const AddTodo = () => {

  const { agregarTodo } = useAddTodo();
  const inputRef    = useRef()


  const anadirTarea = () =>{

    const dataInput = inputRef.current.value;
    if ( dataInput.length > 1 ) agregarTodo( dataInput )
    inputRef.current.value = ""
  }


  return (
    <div className='addTodoContainer'>

        <input  type        ="text"
                className   ='form-control'
                placeholder ="Escriba su tarea aquì"
                maxLength   ={ 30 }
                ref         = { inputRef }/>

        <button className='addTodoIcon btn btn-secondary'
                onClick={ anadirTarea }>
          Añadir Tarea
        </button>
    </div>
  )
}
