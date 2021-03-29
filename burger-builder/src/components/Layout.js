import React from "react"

const layuot = (props) => {
  return (
    <div>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>{props.children}</main>
    </div>
  )
}

export default layuot
