import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedItems;
  let updatedAmount;
  let newItem=true;
  if (action.type === "ADD") {
    updatedAmount = state.totalAmount + (action.item.dishPrice * action.item.dishQuantity);
    const updatedItemIndex = state.items.findIndex(item => item.dishName === action.item.dishName);
    if(updatedItemIndex>-1)
    {
      let updatedItem= state.items[updatedItemIndex];
      updatedItem = {...updatedItem, dishQuantity: updatedItem.dishQuantity + action.item.dishQuantity}
      ;
      updatedItems = [...state.items];
      updatedItems[updatedItemIndex] = updatedItem;
    }
    else{
      updatedItems = state.items.concat(action.item);
    }
    
    return { items: updatedItems, totalAmount: updatedAmount };
  }
  else if(action.type === "REMOVE"){
    const updatedItemIndex = state.items.findIndex(item => item.dishName === action.item.dishName);
    updatedAmount = state.totalAmount - action.item.dishPrice;
    if(action.item.dishQuantity===0)
      updatedItems = state.items.filter(item => item.dishName != action.item.dishName);
    else{
      updatedItems = state.items;
      updatedItems[updatedItemIndex].dishQuantity--;
    }
    return { items: updatedItems, totalAmount: updatedAmount };  
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultState);

  const addDishHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };

  const removeDishHandler = (item) => {
    dispatchCartState({ type: "REMOVE", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addDishHandler,
    removeItem: removeDishHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
