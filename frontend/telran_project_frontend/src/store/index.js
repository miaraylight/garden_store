import { applyMiddleware, combineReducers, createStore } from "redux";
import { productReducer } from "./reducers/productReducer";
import { basketReducer } from "./reducers/basketReducer"
import { categoriesReducer } from "./reducers/categoriesReducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    //basket: basketReducer,
    category: categoriesReducer,
    products: productReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))