import React, { useState } from 'react'
import { getDataLocalStorage } from '../../helpers/manipulateLocalStorage'
import { ClockContext } from './ClockContext'


export const ClockProvider = ({ children }) => {

  const [ minutos, setMinutos ] = useState({
    minutosFocus        : 25,
    minutosDescanso     : 5,
    minutosDescansoLargo: 15
  })
  
  return (
    <ClockContext.Provider value = {{ minutos, setMinutos }}>
        { children }

    </ClockContext.Provider>
  )
}
