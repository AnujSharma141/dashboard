import React, { useEffect, useState } from 'react'
import Nav from '../components/dashboard/nav'
import UserList from '../components/dashboard/list'
import Tabs from '../components/dashboard/tabs'
import Visalisation from '../components/dashboard/chart'
import axios from 'axios'

export default function Dashboard() {

const [data, setData] = useState({status: false, value: null})

useEffect(()=>{
    axios.get('https://dashboard-2cw8.onrender.com/users').then(response=>setData({status:true, value:response.data}))
},[])

// const data = [{email: "lebron@email.com", age: 24}, 
// {email: "steph@email.com", age: 21}, 
// {email: "kevin@email.com", age: 20},
// {email: "lebron@email.com", age: 24}, 
// {email: "steph@email.com", age: 21}, 
// {email: "kevin@email.com", age: 20},
// {email: "lebron@email.com", age: 24}, 
// {email: "steph@email.com", age: 21}, 
// {email: "kevin@email.com", age: 20}]
  return (
    <div className='dashboard-layout'>
        <Nav />
        <div className='dashboard-content'>
            <UserList data={data} />
            <div className='dashboard-sm'>
                <Tabs data={data} />
                <Visalisation data={data}  />
            </div>
        </div>
    </div>
  )
}
