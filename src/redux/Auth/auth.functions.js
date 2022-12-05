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

  export const pushToCart = (cart, product, setOnCart, dispatch) => {
    cart.push(product);
    dispatch({type: "setCart", payload: cart})
    localStorage.setItem("cart", JSON.stringify(cart))
    setOnCart(true)
  }

  export const removeFromCart = (cart, product, setOnCart, dispatch) => {
    cart = cart.filter(cartProduct => cartProduct.name !== product.name)
    dispatch({type: "setCart", payload: cart})
    localStorage.setItem("cart", JSON.stringify(cart))
    setOnCart(false)
  }