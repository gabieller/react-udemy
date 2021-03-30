import React from "react"
import styles from "../styles/buildControls.module.css"
import BuildControl from "./BuildControl"

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
]

const buildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      {controls.map((ctrl) => (
        <BuildControl
          added={() => props.ingredientAdd(ctrl.types)}
          key={ctrl.label}
          label={ctrl.label}
        />
      ))}
    </div>
  )
}
export default buildControls
