import * as types from "../constants/food.constants";
import api from "../../apiService";

const foodsRequest = () => async (dispatch) => {
  dispatch({ type: types.GET_FOODS_REQUEST, payload: null });
  try {
    const res = await api.get(`/food`);
    dispatch({ type: types.GET_FOODS_SUCCESS, payload: res.data.data.foods });
  } catch (error) {
    dispatch({ type: types.GET_FOODS_FAILURE, payload: null });
  }
};

const foodActions = {
  foodsRequest,
};
export default foodActions;
