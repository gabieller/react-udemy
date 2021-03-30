import React from "react"
import Aux from "./hoc/Aux"
import styles from "../styles/layout.module.css"

const layuot = (props) => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.Content}>{props.children}</main>
    </Aux>
  )
}

export default layuot
