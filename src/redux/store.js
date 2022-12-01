import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import productsReducer from "./Products/products.reducer";

const rootReducer = combineReducers({
    products: productsReducer,
})



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;