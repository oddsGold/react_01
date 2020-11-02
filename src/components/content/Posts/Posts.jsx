import React from "react";
import NewPost from "./NewPost";
import posts from './Posts.module.css';
import state from "../../redux/state";
import {addNewPost} from "../../redux/state";

const Posts = () => {

    let newTextareaPost = React.createRef();

    let addPost = () => {
        addNewPost(newTextareaPost.current.value);
        newTextareaPost.current.value = '';
    }

    return (
        <div className={posts['content-posts']}>
            <p>My posts</p>
            
            <div className={posts['content-posts-create']}>
                <textarea ref={newTextareaPost}></textarea>
                <input onClick={addPost} type="submit"/>
            </div>
            
            <div className={posts["content-posts-new"]}>
                <NewPost props={state.postsMessage} />
            </div>
        </div>
    )
}
export default Posts;