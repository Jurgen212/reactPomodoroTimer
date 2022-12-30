import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import { PomodoroPage } from '../pages/PomodoroPage'

const PomodoroRoutes = () => {

  
  return (
        <Routes>

            <Route path='/'     element = { <PomodoroPage/>      }/>
            <Route path='/*'    element = { <Navigate to="/"/> } />
        </Routes>
  )
}

export default PomodoroRoutes;