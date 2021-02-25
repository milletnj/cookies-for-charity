import { RECEIVE_PRODUCTS } from "../constants/ActionTypes";

const products = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    default: {
      return state;
    }
  }
};

export default products;
