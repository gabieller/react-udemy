import React from "react"

const ValidationComponent = (props) => {
  return (
    <div>
      {props.changed <= 6 ? <p>Text is too short</p> : <p>Text long enough</p>}
    </div>
  )
}

export default ValidationComponent
