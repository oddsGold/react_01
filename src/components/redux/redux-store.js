import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: postsReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);

export default store;