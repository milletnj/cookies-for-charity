import { createSelector } from "reselect";

export const getCartProducts = (state) => state.cart.items;

export const getTotal = createSelector(getCartProducts, (cartProducts) => {
  return cartProducts
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
});
