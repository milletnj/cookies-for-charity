import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

export const addToCart = productId => dispatch => {
  dispatch({
    type: types.ADD_TO_CART,
    productId
  })
}

export const removeFromCart = productId => dispatch => {
  dispatch({
    type: types.REMOVE_FROM_CART,
    productId
  })
}

export const changeProductQuantity = (productId, quantity) => dispatch => {
  dispatch({
    type: types.CHANGE_PRODUCT_QUANTITY,
    productId,
    quantity
  })
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
