import React, { useEffect, useState } from 'react'
import { TodoTarget } from './subcomponents/TodoTarget'
import './styles/styleTodos.css'
import { useAddTodo } from '../hooks/useAddTodo';

export const Todos = () => {

  const { data, eliminarTodo }  = useAddTodo();
  
  const eliminarTodobyIndex = ( index ) =>{
    
    eliminarTodo( index )
  }

  return (
    <div className='todosTargetContainer'>
      {/* <TodoTarget/> */}

      {

        ( data !== [] ) && data.map(  ( value, index ) =>  
                                                    <TodoTarget key={ index } 
                                                                infoTodo = { value } 
                                                                eliminarTodoByIndex = { eliminarTodobyIndex }
                                                                index = { index }
                                                    />                                         
        )
      }
    </div>
  )
}
