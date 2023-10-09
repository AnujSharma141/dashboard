import React, { useContext } from 'react'
import AuthContext from '../../core/context/auth'

export default function Nav() {

    const auth = useContext(AuthContext)
    return (
        <div className='nav'>
        <img src="https://i.ibb.co/C8tDvLG/logo-light.png" className='nav-logo' alt="logo-light" border="0" />
            <span onClick={()=>auth(false)} className='nav-link'>logout</span>
        </div>
    )
}
