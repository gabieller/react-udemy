import React from "react"
import BurgerIngredients from "./BurgerIngredients"

import styles from "../styles/Burger.module.css"

const burger = (props) => {
  let transformIngredients = Object.keys(props.ingredients)
    .map(
      //array with empty arrays
      (ingredientKey) => {
        //create a arrray with empty spaces with the lenght of given ingredients
        return [...Array(props.ingredients[ingredientKey] )].map((_, i) => {
          return (
            <BurgerIngredients key={ingredientKey + i} type={ingredientKey} />
          )
        })
      }
    )
    .reduce((arr, el) => {
      //allows to transform array into something else
      return arr.concat(el) //concat all created arrays into one array
    }, [])

  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  )
}

export default burger
