import React from "react";
import NewPost from "./NewPost";
import posts from './Posts.module.css';

const Posts = (props) => {
    let newTextareaPost = React.createRef();

    let onAddPost = () => {
        // console.log(props.addPost())
        props.addPost();
    }

    let onPostChange = () => {
        // console.log(props.postChange(newTextareaPost.current.value))
        props.postChange(newTextareaPost.current.value)
    }



    return (
        <div className={posts['content-posts']}>
            <p>My posts</p>
            
            <div className={posts['content-posts-create']}>
                <textarea ref={newTextareaPost} onChange={onPostChange} value={props.tempMessage}/>
                <input onClick={onAddPost} type="submit"/>
            </div>
            
            <div className={posts["content-posts-new"]}>
                <NewPost props={props.posts} />
            </div>
        </div>
    )
}
export default Posts;