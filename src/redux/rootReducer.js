import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
} from "./products/productReducer";

export const rootReducer = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
});
