import isLogged from "../Reducers/ReducerOne";
import ApiCalling from "../Reducers/ReducerTwo";
import { combineReducers } from "redux";

// I've used combineReducer. Reason of Some times I'll work with multiple
// Reducer so, I just Practics that in here and this is not require for single Reducer
const AllReducer = combineReducers({
  Logged: isLogged,
  UserApiCalling: ApiCalling,
});

export default AllReducer;
