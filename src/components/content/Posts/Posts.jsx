import React from "react";
import NewPost from "./NewPost";
import posts from './Posts.module.css';
import store from "../../redux/redux-store";
import {addNewPostActionCreator, changeNewPostActionCreator} from "../../redux/posts-reducer";

const Posts = (prop) => {
    let newTextareaPost = React.createRef();

    let addPost = () => {
        store.dispatch(addNewPostActionCreator());
    }

    let onPostChange = () => {
        store.dispatch(changeNewPostActionCreator(newTextareaPost.current.value));
    }

    return (
        <div className={posts['content-posts']}>
            <p>My posts</p>
            
            <div className={posts['content-posts-create']}>
                <textarea ref={newTextareaPost} onChange={onPostChange} value={store.getState().profilePage.tempMessage}/>
                <input onClick={addPost} type="submit"/>
            </div>
            
            <div className={posts["content-posts-new"]}>
                <NewPost props={store.getState().profilePage.postsMessage} />
            </div>
        </div>
    )
}
export default Posts;