import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  REMOVE_FROM_CART,
  CHANGE_PRODUCT_QUANTITY,
} from "../constants/ActionTypes";

const initialState = {
  items: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState;
    case CHECKOUT_FAILURE:
      return action.cart;
    case ADD_TO_CART: {
      return { ...state, items: action.cartItems };
    }
    case REMOVE_FROM_CART: {
      return { ...state, items: action.cartItems };
    }
    case CHANGE_PRODUCT_QUANTITY: {
      return { ...state, items: action.cartItems };
    }
    default:
      return state;
  }
};

export default cart;
