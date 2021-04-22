import { ActionTypes } from "./productTypes";

const productInitialState = {
  products: [],
};

export const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

const selectedProductInitialState = {
  product: {},
};

export const selectedProductReducer = (
  state = selectedProductInitialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, product: {} };
    default:
      return state;
  }
};
