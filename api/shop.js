import _products from "../products.json";

const TIMEOUT = 100;

export default {
  getProducts: () => _products,
  buyProducts: (payload, cb, timeout) =>
    setTimeout(() => cb(), timeout || TIMEOUT),
};
