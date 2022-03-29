import { combineReducers } from "redux";
import auth from "./auth";
import createProduct from "./products"

const combinedReduser = combineReducers({
    auth: auth,
    createProduct: createProduct
})

export default combinedReduser