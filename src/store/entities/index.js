import { combineReducers } from "redux";
import products from "./products";
import modal from "./modal";
import user from './user';

export default combineReducers({
    products,
    modal,
    user
});