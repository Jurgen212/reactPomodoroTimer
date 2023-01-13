import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth'
import LogoutIcon from '@mui/icons-material/Logout';

import './styles/styleAside.css'

export const AsideHeader = () => {

    const dispatch = useDispatch();

    const logOut = () =>{

        dispatch( startLogout() );
    }


  return (
    <div className='asideHeaderContainer'>
        <button className ='iconButton
                            btn btn-secondary'
                    onClick={ logOut }>
            <LogoutIcon/>
            </button>

            <p className='asideTitle'>Tareas por hacer </p>
    </div>
  )
}
