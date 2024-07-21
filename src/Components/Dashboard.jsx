import React, { useState } from 'react'
import '../App.css'
import {  useNavigate } from 'react-router-dom'
// import Dashhome from './Dashhome'
// import Table from './Table'
import threeerro from './img/threeerro.png'
// import Billing from './Billing'



export default function Dashboard() {

  const navigate = useNavigate()

  const [activePage , setActivepage] = useState('dashbord')

  const gotoHome = () => {
    navigate("/")
    setActivepage('dashbord')
  }
  const gototablePage = () => {
    navigate("/table")
    setActivepage('table')

  }
  const gotoBilling = () => {
    navigate("/billing")
    setActivepage('billing')

  }
  const gotortl = () => {
    navigate("/rtl")
    setActivepage('rtl')

  }
  const gotoNotification = () => {
    navigate("/notification")
    setActivepage('notification')

  }
  const gotoProfile = () => {
    navigate("/profile")
    setActivepage('profile')

  }
  
  return (
    <>
      <div className="dashbox">
        <div id="MD">
          <h5 ><img src={threeerro} alt="" id='threeerro' /> Material Dashboard</h5>
          <hr />
          <ul className='line'>
            <li className={activePage === 'dashbord'? 'active' : ''} onClick={gotoHome }><i class="fa-solid fa-square-poll-vertical font"></i> Dashboard</li>
            <li onClick={gototablePage}className={activePage === 'table'? 'active' : ''} ><i class="fa-solid fa-table  font "></i> Tables</li>
            <li onClick={gotoBilling} className={activePage === 'billing'? 'active' : ''}><i class="fa-solid fa-receipt font"></i> Billing</li>
            <li onClick={gotortl}className={activePage === 'rtl'? 'active' : ''} ><i class="fa-solid fa-arrows-to-dot font"></i> RTL</li>
            <li  onClick={gotoNotification}className={activePage === 'notification    '? 'active' : ''}><i class="fa-solid fa-bell font"></i> Notification</li>
            <li  onClick={gotoProfile}className={activePage === 'profile'? 'active' : ''}><i class="fa-solid fa-user font"></i> Profile</li>
            <li><i class="fa-solid fa-arrow-right-to-bracket font"></i> Sign In</li>
            <li><i class="fa-solid fa-user-plus font"></i> Sign Up</li>
          </ul>
        </div>
      </div>


      
      
    </>
  )
}
