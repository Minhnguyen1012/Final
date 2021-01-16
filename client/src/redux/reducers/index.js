import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import CartReducer from "./cart.reducer";
import foodReducer from "./food.reducer";
import routeReducer from "./route.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  auth: authReducer,
  food: foodReducer,
  user: userReducer,
  route: routeReducer,
  cart: CartReducer,
});
