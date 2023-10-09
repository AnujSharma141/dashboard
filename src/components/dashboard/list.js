import React from 'react'

export default function UserList({data}) {
  return (
    <div className='user-list'>
        <table className='user-table'>
            <tr className='user-table-header'><td>email</td><td>age</td></tr>
            {data.map(item=><tr className='user-table-row'><td>{item.email}</td><td>{item.age}</td></tr>)}
        </table>
    </div>
  )
}
