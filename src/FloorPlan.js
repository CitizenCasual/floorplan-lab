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
      <Bedroom bedNum={1} />
      <Bedroom bedNum={2} />
      <Bath size={'half'} />
      <Bath size={'full'} />
    </>
  )
}

export default FloorPlan