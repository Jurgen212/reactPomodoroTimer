import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

import './styles/stylePomodoroAndUserConfig.css'

export const UserConfig = ({ visibilityUser, closeOptions }) => {

  return (
    <>
      <div  className='containerData animate__animated animate__backInLeft'
            style={{
              display: visibilityUser
            }}
            >
            
            
            <div>DataConfiguracionUser</div>
            <button className ='btn btn-secondary
                                iconButtonClose'
                    onClick={ closeOptions }>
                      
                    <CloseIcon/>
            </button>
            
            </div>
    
    </>
  )
}
