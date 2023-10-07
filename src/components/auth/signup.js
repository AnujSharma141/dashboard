import React from 'react'

export default function Signup(props) {
  return (
    <>
     <form className='auth-form'>
        <input className='input' placeholder='email' type="text" name="" id="" />  
        <input className='input' placeholder='age' type="text" name="" id="" /> 
        <button className='button'>Continue</button>
    </form>
      already a user? <span className='text-link' onClick={()=>props.change(true)}>Login</span>
    </>
  )
}
