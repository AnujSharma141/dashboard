import React from 'react'

export default function Tabs({data}) {

    const averageAge = (data) =>{
        let ageSum = 0
        data.map(user=> ageSum = ageSum + user.age)
        return Number(ageSum/data.length).toPrecision(4)
    }

    const Tab = ({text, metric}) => <div className='tab'>
    <p className='tab-text'>{text}</p>
    <p className='tab-metric'>{metric}</p>
    </div>

  return (
    <div className='tabs'>
            <Tab text="users registered" metric={data.length} />
            <Tab text="average age" metric={averageAge(data)} />
    </div>
  )
}
