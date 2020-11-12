import React from "react";
import NewPost from "./NewPost";
import posts from './Posts.module.css';
import store from "../../redux/redux-store";

const Posts = (props) => {
    let newTextareaPost = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        props.changeNewPost(newTextareaPost.current.value)
    }



    return (
        <div className={posts['content-posts']}>
            <p>My posts</p>
            
            <div className={posts['content-posts-create']}>
                <textarea ref={newTextareaPost} onChange={onPostChange} value={props.setPost().tempMessage}/>
                <input onClick={onAddPost} type="submit"/>
            </div>
            
            <div className={posts["content-posts-new"]}>
                <NewPost props={props.setPost().postsMessage} />
            </div>
        </div>
    )
}
export default Posts;