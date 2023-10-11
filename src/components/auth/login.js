import React, { useContext, useState } from 'react'
import AuthContext from '../../core/context/auth'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

export default function Login(props) {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [loader, setloader] = useState(false)

    const auth = useContext(AuthContext)
    const formSubmit = (e) =>{

        e.preventDefault()
        setloader(true)
        const userCredentials = {
            email: email,
            pin: password,
          }
      
          axios.post('https://dashboard-2cw8.onrender.com/login', userCredentials)
            .then((response) => {
                setloader(false)
                toast.success('Login successful!')
                auth.set({status:true, data: response.data})
            })
            .catch((error) => {
                setloader(false)
                toast.error('Invalid email or password')
            })

            
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
    <form className='auth-form login-form' onSubmit={(e)=>formSubmit(e)}>
        <input className='input' placeholder='email' required autoComplete='off' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" />  
        <input className='input' placeholder='password' required type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)} id="password" /> 
        <button className='button'>Login</button>
    </form>
    not a user? <span className='text-link' onClick={()=>props.change(false)}>Register</span>
    </>
  )
}
