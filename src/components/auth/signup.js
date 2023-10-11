import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

export default function Signup(props) {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirm, setConfirm] = useState(null)
    const [age, setAge] = useState(null)
    const [loader, setloader] = useState(false)

    const formSubmit = (e) =>{
        
        e.preventDefault()
        setloader(true)
        const userCredentials = {
            email: email,
            pin: password,
            age: age
          }
          if(password == confirm)
          axios.post('https://dashboard-2cw8.onrender.com/register', userCredentials)
            .then((response) => {
            setloader(false)
              toast.success('Successfully registerd!')
              props.change(true)
            })
            .catch((error) => {
                setloader(false)
               toast.error(error.response.data)
            })
            else(toast.error("Check password!"))
    }
    return (
    <>
    {loader? <div className='universal-loader'><svg className='loader' version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" space="preserve">
            <path fill="#000" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
            <animateTransform 
                attributeName="transform" 
                attributeType="XML" 
                type="rotate"
                dur="1s" 
                from="0 50 50"
                to="360 50 50" 
                repeatCount="indefinite" />
                </path>
            </svg></div>: ''}
     <form className='auth-form' onSubmit={(e)=>formSubmit(e)}>
        <input className='input' placeholder='email' required autoComplete='off' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="" />  
        <input className='input' placeholder='password' required autoComplete='off' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="" /> 
        <input className='input' placeholder='confirm password' required autoComplete='off' type="password" name="confirm" value={confirm} onChange={(e) => setConfirm(e.target.value)} id="" /> 
        <input className='input' placeholder='age' required autoComplete='off' type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} id="" /> 
        <button className='button'>Continue</button>
    </form>
      already a user? <span className='text-link' onClick={()=>props.change(true)}>Login</span>
    </>
  )
}
