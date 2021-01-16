import * as types from "../constants/cart.constants";
import api from "../../apiService";
import { toast } from "react-toastify";
import routeActions from "./route.actions";

const cartsRequest = (foodToAdd) => async (dispatch) => {
  dispatch({
    type: types.ADD_FOOD_TO_CART_SUCCESS,
    payload: foodToAdd,
  });
};

const createNewCart = (content) => async (dispatch) => {
  console.log(content);
  dispatch({ type: types.CREATE_CART_REQUEST, payload: null });
  try {
    const res = await api.post("/carts", { content });
    dispatch({
      type: types.CREATE_CART_SUCCESS,
      payload: res.data.data,
    });

    toast.success("New Cart has been created!");
  } catch (error) {
    console.log(error);
    dispatch({ type: types.CREATE_CART_FAILURE, payload: error });
  }
};
const cartActions = {
  cartsRequest,
  createNewCart,
};
export default cartActions;
