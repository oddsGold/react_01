import React from "react";
import Posts from "./Posts";
import {addPost} from "../../redux/posts-reducer";
import {connect} from "react-redux";

function PostsContainer (props) {
    return (
        <Posts
            addPost={props.addPost}
            posts={props.posts}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsMessage,
    }
}

export default connect(mapStateToProps, {
    addPost
})(PostsContainer);