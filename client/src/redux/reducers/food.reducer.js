import * as types from "../constants/food.constants";
const initialState = {
  totalPageNum: 1,
  selectedfood: null,
  loading: false,
};

const foodReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_FOODS_REQUEST:
      return { ...state, loading: true };
    case types.GET_FOODS_SUCCESS:
      return { ...state, foods: payload, loading: false };
    case types.GET_FOODS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default foodReducer;
