import { API } from "../../utils/services/api"; 

export const getProducts = async ( dispatch ) => {
 try {
    const result = await API.get("/products");
    dispatch({type: "getProducts", payload: result.data});
    
 } catch (error) {
    dispatch({type: "errorProducts", payload: error.response?.data})
    
 }
    
}