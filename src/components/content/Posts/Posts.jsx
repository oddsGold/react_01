import React from "react";
import NewPost from "./NewPost";
import posts from './Posts.module.css';
import state from "../../redux/state";


const Posts = () => {

    return (
        <div className={posts['content-posts']}>
            <p>My posts</p>
            
            <div className={posts['content-posts-create']}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input type="submit"/>
            </div>
            
            <div className={posts["content-posts-new"]}>
                <NewPost props={state.postsMessage}/>
            </div>
        </div>
    )
}
export default Posts;