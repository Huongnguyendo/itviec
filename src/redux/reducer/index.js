import { combineReducers } from "redux";
import authReducer from "./authReducer";
import JobReducer from "./jobReducer";

export default combineReducers({
  job: JobReducer,
  auth: authReducer,
});