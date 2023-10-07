import React from 'react'

export default function Tabs() {
    const Tab = ({text, metric}) => <div className='tab'>
    <p className='tab-text'>{text}</p>
    <p className='tab-metric'>{metric}</p>
    </div>

  return (
    <div className='tabs'>
            <Tab text="users registered" metric="6" />
            <Tab text="average age" metric="21" />
    </div>
  )
}
