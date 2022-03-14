import React from 'react'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom from './Bedroom'
import Bath from './Bath'

const FloorPlan = (props) => {
  return (
    <>
      <div>Floor Plan</div>
      <LivingRoom />
      <Kitchen />
      <Bedroom bedNum={props.bedNum}/>
      <Bath size={props.size} />
    </>
  )
}

export default FloorPlan