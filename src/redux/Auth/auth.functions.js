import { API } from "../../utils/services/api";

export const postUser = async (data, navigate, dispatch) => {
    try {
      const result = await API.post("/users/postNewUser", data);
      dispatch({ type: "registerUser", payload: result.data });
      navigate("/login");
    } catch (error) {
      dispatch({ type: "registerError", payload: error.message });
    }
  };

  export const loginUser = async (data, navigate, dispatch) => {

    try {
      const result = await API.post("/users/login", data);
      dispatch({ type: "loginUser", payload: result.data });
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("cart", "[]");
      navigate("/");
    } catch (error) {
      dispatch({ type: "loginError", payload:error.response.data });
    }
  };

  export const logoutUser = (navigate, dispatch) => {
    try {
      dispatch({ type: "logoutUser" });
      localStorage.removeItem("token");
      localStorage.removeItem("cart");
      navigate("/");
    } catch (error) {
      dispatch({ type: "logoutError", payload: error.message });
    }
  };

  export const putUser = async (data, dispatch, id, setEdit) => {
    try {
      const result = await API.put(`users/edit/${id}`, data);
      dispatch({type: "putUser", payload: result.data});
      setEdit(false);
    } catch (error) {
      dispatch({ type: "putUser", payload: error.message });
    }
  }
  
  export const checkSession = async (token, navigate, dispatch) => {
    const result = await API.post("users/checksession");
    dispatch({ type: "userChecksession", payload:{token:token, user:result.data}});
    localStorage.setItem("token", token);
    navigate("/comparator");
  };

  export const pushToCart = ( product, setIsInCart ) => {
    const cart = JSON.parse(localStorage.getItem("cart"))
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))
    setIsInCart(true)
  }

  export const removeFromCart = ( product, setIsInCart ) => {
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart = cart.filter(cartProduct => cartProduct.name !== product.name)
    localStorage.setItem("cart", JSON.stringify(cart))
    setIsInCart(false)
  }