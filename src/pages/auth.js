import React, { useState } from 'react'
import Login from '../components/auth/login'
import Signup from '../components/auth/signup'


export default function Auth() {
    const [registered, setRegistered] = useState(true)
  return (
    <div className='auth-layout'>
      <div className='form-layout'>
        <div className='auth-header'>
        <img src="https://i.ibb.co/3f2hXfT/logo.png" className='auth-header-img' alt="logo" />
            <p className='auth-header-text'>Spring Boot + React</p>
            <p className='auth-header-title'>dashboard</p>
        </div>
        <div className='auth-form-layout'>
          {registered?<Login change={setRegistered}/> : <Signup change={setRegistered}/>}
        </div>
      </div>
      <div className='auth-image'></div>
    </div>
  )
}
