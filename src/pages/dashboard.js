import React from 'react'
import Nav from '../components/dashboard/nav'
import UserList from '../components/dashboard/list'
import Tabs from '../components/dashboard/tabs'
import Chart from '../components/dashboard/chart'

export default function Dashboard() {
  return (
    <div className='dashboard-layout'>
        <Nav />
        <div className='dashboard-content'>
            <UserList />
            <div className='dashboard-sm'>
                <Tabs />
                <Chart />
            </div>
        </div>
    </div>
  )
}
