import React, { useContext } from 'react'
import AuthContext from '../../core/context/auth'
import toast from 'react-hot-toast';

export default function Nav() {
    const auth = useContext(AuthContext)
    return (
        <div className='nav'>
        <img src="https://i.ibb.co/C8tDvLG/logo-light.png" className='nav-logo' alt="logo-light" border="0" />
            <span className='nav-user'>{auth.user.data.email}</span>
            <span onClick={()=>{auth.set({status: false, data: null}); toast.success('Logged Out!')}} className='nav-link'>logout</span>
        </div>
    )
}
