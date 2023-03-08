import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import './main.scss'

const Main = () => {
  return (
    <div className='main'>
        <Header/>
        <div className="wrapper">
            <Leftbar/>
            <div className='outlet-area'>
            <Outlet/>
            </div>
            <Rightbar/>
        </div>
    </div>
  )
}

export default Main