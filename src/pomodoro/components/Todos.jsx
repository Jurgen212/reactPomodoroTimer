import React from 'react'
import { TodoTarget } from './subcomponents/TodoTarget'
import './styles/styleTodos.css'

const infoTodo = [

  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ1"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ2"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ3"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ4"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ5"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ6"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ7"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ8"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ9"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ0"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ00"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ000"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ11"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ12"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ13"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ23"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ24"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ25"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sss26Z"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ267"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ266"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ234"],
  ['Lorem ipsum dolor sit amet ', "YYYY-MM-DDTHH:mm:ss. sssZ1235"]
]



export const Todos = () => {
  return (
    <div className='todosTargetContainer'>
      {/* <TodoTarget/> */}

      {
        infoTodo.map( data => <TodoTarget key={ data[1] } infoTodo ={ data[0] } /> )
      }
    </div>
  )
}
