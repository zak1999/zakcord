import React from 'react'
import { auth } from '../../firebase_config'
import "./logout.css"

export default function Logout() {
  
  const LogoutUser = () =>{
    auth.signOut()
  }
  return (
    <div>
    <button onClick={LogoutUser}>Logout</button>
    </div>
  )
}
