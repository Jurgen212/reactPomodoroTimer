import React from 'react'
import '../styles/stylePomodoroClock.css'


export const OptionsContainer = ({ activateVisibilityUser, activateVisibilityOptions }) => {
  return (
    <div className='iconsContainer'>
        
        <button className='iconButton btn btn-secondary'
                onClick={ activateVisibilityOptions }>

            <span   className="material-icons">settings</span>
        </button>

        <button className='iconButton btn btn-secondary'
                onClick={ activateVisibilityUser }>

            <span className="material-icons">account_circle</span>
        </button>
    </div>
  )
}
