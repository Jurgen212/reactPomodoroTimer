import React from 'react'
import { PomodoroClock } from '../components/PomodoroClock'
import { PomodoroConfigs } from '../components/PomodoroConfigs'
import { UserConfig } from '../components/UserConfig'
import { useVisibility } from '../hooks/useVisibility'
import './styles/stylePomodoroView.css'

import { ClockProvider } from '../context/ClockProvider'


export const PomodoroView = () => {



  const { visibilityUser, 
          visibilityConfig, 
          activateVisibilityUser,
          activateVisibilityOptions,
          closeOptions              } = useVisibility();

  return (

    
    <ClockProvider className='pomodoroContainer'>

      <UserConfig       visibilityUser    = { visibilityUser }    closeOptions = {closeOptions} />
      <PomodoroConfigs  visibilityConfig  = { visibilityConfig }  closeOptions = { closeOptions }/>
      <PomodoroClock activateVisibilityUser = { activateVisibilityUser } activateVisibilityOptions = { activateVisibilityOptions }/>
    </ClockProvider>
  )
}
