import React, { Component } from "react"
import PropTypes from "prop-types"

import styles from "../styles/burger_ingredients.module.css"

class BurgerIngredients extends Component {
  render() {
    let ingredient = null

    switch (
      this.props.type //similar to if statement but I know each case
    ) {
      case "bread-bottom":
        ingredient = <div className={styles.BreadBottom}></div>
        break
      case "bread-top":
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
          </div>
        )
        break
      case "meat":
        ingredient = <div className={styles.Meat}></div>
        break
      case "cheese":
        ingredient = <div className={styles.Cheese}></div>
        break
      case "salad":
        ingredient = <div className={styles.Salad}></div>
        break
      case "bacon":
        ingredient = <div className={styles.Bacon}></div>
        break
      default:
        //if something pass wrong
        ingredient = null
    }
    return ingredient
  }
}

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
}

export default BurgerIngredients
