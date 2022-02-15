import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import './Help.scss'
import helpImg from '../../images/bao-charity-1.png'
export default function Help() {
  return (
    <div>
        <MainMenu/>
        <div className='help-container'>
        <h1>Help</h1>
        <p className='text'>This application is meant to track tasks that are entered by a user. While making this application i've learned about react lifecycle methods, functional vs class components, react-dom, scss, passing props, rendering components, and the ternary operator!</p>
        <p>Enjoy this awesome illustration</p>
        <p>Illustration by <a href="https://icons8.com/illustrations/author/60c868b228e02f000aef145d">AsIa Vitalyevna</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
        <img src={helpImg} alt="Help"/>
        </div>
    </div>
  )
}
