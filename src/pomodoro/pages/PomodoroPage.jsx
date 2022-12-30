import React from 'react'

import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth'
import { BackgroundPrincipal } from '../layout/BackgroundPrincipal'
import { AsideBar } from '../views/AsideBar'
import { PomodoroView } from '../views/PomodoroView'


export const PomodoroPage = () => {

  return (

    <>
      <BackgroundPrincipal>

        <PomodoroView/>
        <AsideBar/>
      </BackgroundPrincipal>
      {/* <button onClick={ () => logOut()}>Logout</button> */}
    </>
  )
}
