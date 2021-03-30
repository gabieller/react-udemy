import React from "react"
import BurgerIngredients from "./BurgerIngredients"

import styles from "../styles/Burger.module.css"


const burger = (props) => {
  return <div className={styles.Burger}>
    <BurgerIngredients type="bread-top"/>
    <BurgerIngredients type="cheese"/>
    <BurgerIngredients type="meat"/>
    <BurgerIngredients type="bread-bottom"/>
   
  </div>
}

export default burger
