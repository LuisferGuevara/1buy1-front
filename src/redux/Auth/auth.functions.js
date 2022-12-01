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