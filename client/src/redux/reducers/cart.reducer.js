import * as types from "../constants/cart.constants";
const initialState = {
  totalPageNum: 1,
  cartFoods: [],
  loading: false,
};

const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_FOOD_TO_CART_SUCCESS:
      return {
        ...state,
        cartFoods: [...state.cartFoods, payload],
        loading: false,
      };
    default:
      return state;
  }
};

export default CartReducer;
