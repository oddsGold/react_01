import React from "react";
import store from "../../redux/redux-store";
import Posts from "./Posts";
import {addNewPostActionCreator, changeNewPostActionCreator} from "../../redux/posts-reducer";

const PostsContainer = () => {
    let addPost = () => {
        store.dispatch(addNewPostActionCreator());
    }

    let onPostChange = (text) => {
        store.dispatch(changeNewPostActionCreator(text));
    }

    let getPosts = () => {
        return store.getState().profilePage
    }

    return (
        <Posts changeNewPost={onPostChange} addPost={addPost} setPost={getPosts}/>
    )
}
export default PostsContainer;