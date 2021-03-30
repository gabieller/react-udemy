import React from "react"
// import Aux from "./hoc/Aux"
import styles from "../styles/layout.module.css"

const layuot = (props) => {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.Content}>{props.children}</main>
    </>
  )
}

export default layuot
