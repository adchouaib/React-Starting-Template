import { combineReducers, Reducer } from "redux";

//importing splited reducers
import { dataReducer } from "./Reducers/dataReducer";

export const Reducers:Reducer = combineReducers({
    dataReducer, //add other reducers
});