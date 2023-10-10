import React from 'react'

export default function Tabs({data}) {

    const averageAge = (data) =>{
        let ageSum = 0
        data.value.map(user=> ageSum = ageSum + user.age)
        return Number(ageSum/data.value.length).toPrecision(4)
    }

    const Tab = ({text, metric}) => <div className='tab'>
    <p className='tab-text'>{text}</p>
    <p className='tab-metric'>{metric}</p>
    </div>

  return (
    <div className='tabs'>
            <Tab text="users registered" metric={data.status?data.value.length:0} />
            <Tab text="average age" metric={data.status?averageAge(data):0} />
    </div>
  )
}
