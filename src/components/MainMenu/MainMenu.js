import React from 'react'
import { NavLink} from 'react-router-dom';
import './MainMenu.scss'

export default function MainMenu() {

  return (
    <nav className='nav'>  
    <NavLink to="/React-Web-App" className='links'>Task</NavLink>
    <NavLink to="/help" className='links'>Info</NavLink>
    </nav>
  )
}
