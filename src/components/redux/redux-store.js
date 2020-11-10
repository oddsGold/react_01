import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reducer";

let reducers = combineReducers({
    profilePage: postsReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);

export default store;