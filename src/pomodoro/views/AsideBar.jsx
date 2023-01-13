import React from 'react'
import { AddTodo } from '../components/AddTodo'
import { AsideHeader } from '../components/AsideHeader'
import { Todos } from '../components/Todos'
import { AsideLayout } from '../layout/AsideLayout'
import './styles/styleAsideBar.css'

export const AsideBar = () => {

  return (
    <aside className='asideContainer'>
        
      <AsideHeader/>
      <AsideLayout>

        <AddTodo/>
        <Todos/>
      </AsideLayout>
    </aside>
  )
}
