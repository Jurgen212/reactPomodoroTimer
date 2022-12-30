import React from 'react'
import './stylesLayout.css'


export const AuthLayout = ({ children }) => {
  return (
    <div className='authContainer'>

        <div className='authBox'>
            { children }
        </div>
    </div>
  )
}
