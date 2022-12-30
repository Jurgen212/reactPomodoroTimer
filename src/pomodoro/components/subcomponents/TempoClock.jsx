import React, { useState } from 'react'
import '../styles/stylePomodoroClock.css'

import { useShowOptions } from './helpers/useShowOptions';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

import { TimerClock } from './helpers/TimerClock'

export const TempoClock = () => {

    const { botonStart, botonStop, cambioVisibilidadBoton } = useShowOptions()
    const [ corriendoTiempo, setCorriendoTiempo] = useState( false )

    const cambioEstadoDeTiempo = () =>{
      setCorriendoTiempo( !corriendoTiempo )
    }

  return (
    <>        
        <TimerClock corriendoTiempo = { corriendoTiempo }/>

        <div className='buttonsContainer'>

          <button className ='iconButton btn btn-secondary'
                  style     ={{ display: botonStart }}
                  onClick   = { () =>{ 
                                cambioEstadoDeTiempo()
                                cambioVisibilidadBoton()}}> 

                  <PlayArrowIcon/>
          </button>

          <button className ='iconButton btn btn-secondary'
                  style     ={{ display: botonStop  }}
                  onClick   = { () =>{ 
                    cambioEstadoDeTiempo()
                    cambioVisibilidadBoton()}}>
                                           

                  <StopIcon/>
          </button>
        </div>

    </>
  )
}
