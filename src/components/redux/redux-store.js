import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: postsReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;