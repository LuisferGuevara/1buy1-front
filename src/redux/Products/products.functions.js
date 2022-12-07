import { API } from "../../utils/services/api";

export const getProducts = async (dispatch) => {
  try {
    dispatch({ type: "gettingProducts" });
    const result = await API.get("/products");
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      result.data.forEach(
        (product) =>
          (product.inCart = cart.find((cartProduct) => cartProduct.name === product.name)
            ? true
            : false)
      );
    } else {
      result.data.forEach((product) => (product.inCart = false));
    }
    dispatch({ type: "getProducts", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorProducts", payload: error.response?.data });
  }
};
