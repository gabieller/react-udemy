import React, { Component } from "react"
import Burger from "./Burger"
import BuildControls from "../components/BuildControls"

const PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAddtition = PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddtition
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
  }

  removeIngredientHandler = (type) => {}

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />{" "}
        {/* give to burger builder the ingredient */}
        <BuildControls ingredientAdd={this.addIngredientHandler} />
      </>
    )
  }
}
export default BurgerBuilder
