import { combineReducers } from "redux";
import { reducer as login } from "../screens/Login/reducer";

const rootReducer = combineReducers({ login });

export default rootReducer;
