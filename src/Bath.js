import React from "react";

const Bath = (props) => {
  return (
    <div className="bath" id={`${props.size} Bath`}> {props.size} Bath</div>
  )
}

export default Bath