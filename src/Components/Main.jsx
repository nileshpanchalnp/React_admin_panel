import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Billing from './Billing'
import Dashhome from './Dashhome'
import Notification from './Notification'
import Profile from './Profile'
import RTL from './RTL'
import Table from './Table'

export default function Main() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashhome />} />
        <Route path='/table' element={<Table />} />
        <Route path='/billing' element={<Billing />} /> 
        <Route path='/RTL' element={<RTL />} /> 
        <Route path='/Notification' element={<Notification />} /> 
        <Route path='/Profile' element={<Profile />} /> 
      </Routes>
    </div>
  )
}
