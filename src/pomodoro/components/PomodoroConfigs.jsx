import React, { useContext } from 'react'
import './styles/stylePomodoroAndUserConfig.css'



import CloseIcon from '@mui/icons-material/Close';
import { ClockContext } from '../context/ClockContext';
import { FormularioConfigPomodoro } from './subcomponents/FormularioConfigPomodoro';


export const PomodoroConfigs = ({ visibilityConfig, closeOptions }) => {
  
  return (
    <>
      <div  className='containerData animate__animated animate__backInLeft'
            style={{
              display: visibilityConfig
            }}>
      

          <div>
            <p className='title'>Configuracion de Temporizador</p>
            <FormularioConfigPomodoro/>

          </div>
          <button className ='btn btn-primary
                              iconButtonClose'
                              
                  onClick={ closeOptions }>
                    <CloseIcon/>
          </button>
            
      </div>
    </>
  )
}
