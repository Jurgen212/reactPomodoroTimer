import React from 'react'

import './styles/stylePomodoroClock.css'
import { OptionsContainer } from './subcomponents/OptionsContainer'
import { TempoClock } from './subcomponents/TempoClock'


export const PomodoroClock = ({ activateVisibilityUser, activateVisibilityOptions }) => {
  return (
    <>

        <div className='clockContainer'>

            <OptionsContainer activateVisibilityUser = { activateVisibilityUser } activateVisibilityOptions = {activateVisibilityOptions}/>

            <div className='clockContainerSecondary'>
              <TempoClock/>
            </div>
  
        </div>
    
    </>
  )
}
