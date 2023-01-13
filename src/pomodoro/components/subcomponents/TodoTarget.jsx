import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export const TodoTarget = ({ infoTodo }) => {


  return (
    <div className='todoTarget'>
        
        <p>{ infoTodo }</p>
        <button className=' trashContainer btn btn-danger'>
            <DeleteForeverIcon/>
        </button>
    </div>
  )
}
