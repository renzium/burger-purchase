import React, { Component } from 'react';
import Aux from "../../hoc/Aux";
import Burger from "./../../components/Burger/Burger";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls";
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import PropTypes from 'prop-types';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7 ,
  meat: 1.3,
  cheese:0.4,
}
class BurgerBuilder extends Component{
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing:false,
  }
  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0);
    this.setState({purchaseable:sum > 0})
  }
  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount + 1;
    const updatedIngredients = {
       ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCounted; 
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
    this.updatePurchaseState (updatedIngredients)
  } 
  // removeIngredientsHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   let updatedCounted;
  //   let newPrice;
  //   const priceSubtraction = INGREDIENT_PRICES[type]
  //   let oldPrice = this.state.totalPrice
  //   if (oldCount > 0) {
  //      updatedCounted = oldCount - 1;
  //     newPrice = oldPrice - priceSubtraction;
  //   }
  //   else {
  //      updatedCounted = 0
  //     newPrice = 0;
  //   }
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   }
  //   updatedIngredients[type] = updatedCounted;
  //   this.setState({
  //     ingredients: updatedIngredients
  //     ,totalPrice:newPrice
  //   })
  // }
  removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount === 0) return;
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
          ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({
          totalPrice: newPrice,
          ingredients: updatedIngredients
        })
        this.updatePurchaseState (updatedIngredients)
  }
  purchaseHandler=()=> {
    this.setState({
      purchasing: true,
    })
  }
  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    })
  }
  purchaseContinueHandler = () => {
    alert('Purchase continued')
  }
  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
     disableInfo[key] = disableInfo[key] <= 0
   }
    return (
      <Aux>
        <Modal Modal show={this.state.purchasing}
        cancel={this.purchaseCancelHandler}
        >
          <OrderSummary ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
          </Modal>
          <div><Burger ingredients={this.state.ingredients} /></div>
        <BuildControls
        ingredientAdded={this.addIngredientsHandler}
        ingredientRemoved={this.removeIngredientsHandler}
        disabled={disableInfo}
        currentPrice={this.state.totalPrice}
          purchaseable={!this.state.purchaseable}
          purchase={this.purchaseHandler}
          />
      </Aux>
    );
  }
}
BurgerBuilder.propTypes = {
  show: PropTypes.bool,
  cancel:PropTypes.func,
}
export default BurgerBuilder;