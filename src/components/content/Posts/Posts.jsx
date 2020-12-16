import React from "react";
import NewPost from "./NewPost";
import posts from './Posts.module.css';
import PostReduxForm from "./PostForm";

const Posts = (props) => {

    const onSubmit = (value) => {
        props.addPost(value.newPostBody);
    }

    return (
        <div className={posts['content-posts']}>
            <p>My posts</p>
            
            <PostReduxForm onSubmit={onSubmit}/>
            
            <div className={posts["content-posts-new"]}>
                <NewPost props={props.posts} />
            </div>
        </div>
    )
}
export default Posts;