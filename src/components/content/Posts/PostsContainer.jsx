import React from "react";
// import store from "../../redux/redux-store";
import Posts from "./Posts";
import StoreContext from "../../../storeContext";
import {addNewPostActionCreator, changeNewPostActionCreator} from "../../redux/posts-reducer";

const PostsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {
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
        }
        </StoreContext.Consumer>
    )
}
export default PostsContainer;