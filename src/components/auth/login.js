import React from 'react'

export default function Login(props) {
  return (
    <>
    <form className='auth-form'>
        <input className='input' placeholder='email' type="text" name="" id="" />  
        <input className='input' placeholder='password' type="text" name="" id="" /> 
        <button className='button'>Login</button>
    </form>
    not a user? <span className='text-link' onClick={()=>props.change(false)}>Register</span>
    </>
  )
}
