import React from "react";
import NewPost from "./NewPost";

import posts from './Posts.module.css';

const Posts = () => {
    return (
        <div className={posts['content-posts']}>
            <p>My posts</p>
            <div className={posts["content-posts-new"]}>
                <NewPost />
                <NewPost />
            </div>
        </div>
    )
}
export default Posts;