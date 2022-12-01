import { API } from "../../utils/services/api"; 

export const getProducts = async ( dispacth ) => {
 try {
    const result = await API.get("/products");
    dispacth({type: "getProducts", payload: result.data});
    
 } catch (error) {
    dispacth({type: "errorProducts", payload: error.response?.data})
    
 }
    
}