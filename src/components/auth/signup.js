import React from 'react'

export default function Signup(props) {
    const formSubmit = (e) =>{
        e.preventDefault()
    }
    return (
    <>
     <form className='auth-form' onSubmit={(e)=>formSubmit(e)}>
        <input className='input' placeholder='email' type="text" name="" id="" />  
        <input className='input' placeholder='password' type="text" name="" id="" /> 
        <input className='input' placeholder='confirm password' type="text" name="" id="" /> 
        <input className='input' placeholder='age' type="text" name="" id="" /> 
        <button className='button'>Continue</button>
    </form>
      already a user? <span className='text-link' onClick={()=>props.change(true)}>Login</span>
    </>
  )
}
