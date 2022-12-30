import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth'
import './styles/styleAsideBar.css'

import LogoutIcon from '@mui/icons-material/Logout';

export const AsideBar = () => {

  
  const dispatch = useDispatch()



  const logOut = () =>{

    dispatch( startLogout() );
  }


  return (
    <aside className='asideContainer'>
      
        <button className ='iconButton
                            btn btn-secondary'
                onClick={ logOut }>
          <LogoutIcon/>
        </button>

        <p className='title'>Tareas por hacer </p>

    </aside>
  )
}
