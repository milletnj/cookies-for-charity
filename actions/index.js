import shop from "../api/shop";
import * as types from "../constants/ActionTypes";

const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const getAllProducts = () => (dispatch) => {
  shop.getProducts((products) => {
    dispatch(receiveProducts(products));
  });
};

export const addToCart = (product) => (dispatch, getState) => {
  const { cart } = getState();
  const cartItems = cart.items.slice();

  let productAlreadyInCart = false;
  cartItems.forEach((cartItem) => {
    if (cartItem.id === product.id) {
      cartItem.quantity += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, quantity: 1 });
  }

  dispatch({
    type: types.ADD_TO_CART,
    cartItems,
  });
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  const { cart } = getState();

  const cartItems = cart.items.filter((cartItem) => cartItem.id !== productId);
  dispatch({
    type: types.REMOVE_FROM_CART,
    cartItems,
  });
};

export const changeProductQuantity = (productId, quantity) => (
  dispatch,
  getState
) => {
  const { cart } = getState();
  const cartItems = cart.items.slice();

  cartItems.forEach((cartItem) => {
    if (cartItem.id === productId) {
      cartItem.quantity = quantity;
    }
  });

  dispatch({
    type: types.CHANGE_PRODUCT_QUANTITY,
    cartItems,
  });
};

export const checkout = (products) => (dispatch, getState) => {
  const { cart } = getState();

  dispatch({
    type: types.CHECKOUT_REQUEST,
  });
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart,
    });
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  });
};
