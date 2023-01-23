import React from 'react'
import RowItem from './RowItem'

const Notifications = (props) => {
  return (
    <div className='card'>
        {props.data && props.data.map((item,index)=><RowItem key={index} item={item}/>)}
    </div>
  )
}

export default Notifications