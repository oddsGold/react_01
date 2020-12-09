import React from "react";
import Posts from "./Posts";
import {addPost, postChange} from "../../redux/posts-reducer";
import {connect} from "react-redux";

function PostsContainer (props) {
    return (
        <Posts
            addPost={props.addPost}
            postChange={props.postChange}
            tempMessage={props.tempMessage}
            posts={props.posts}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        tempMessage: state.profilePage.tempMessage,
        posts: state.profilePage.postsMessage,
    }
}

export default connect(mapStateToProps, {
    addPost,
    postChange
})(PostsContainer);