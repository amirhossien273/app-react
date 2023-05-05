import category from "./category";
import users from "./users";

import {combineReducers} from "redux";

const allReducers = combineReducers({
    category,
    users
});

export default allReducers;