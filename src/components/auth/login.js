import React, { useContext } from 'react'
import AuthContext from '../../core/context/auth'

export default function Login(props) {

    const auth = useContext(AuthContext)
    const formSubmit = (e) =>{
        e.preventDefault()
        auth(true)
    }
  return (
    <>
    <form className='auth-form login-form' onSubmit={(e)=>formSubmit(e)}>
        <input className='input' placeholder='email' type="text" name="" id="" />  
        <input className='input' placeholder='password' type="text" name="" id="" /> 
        <button className='button'>Login</button>
    </form>
    not a user? <span className='text-link' onClick={()=>props.change(false)}>Register</span>
    </>
  )
}
