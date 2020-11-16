import React from "react";
import Posts from "./Posts";
import {addNewPostActionCreator, changeNewPostActionCreator} from "../../redux/posts-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        tempMessage: state.profilePage.tempMessage,
        posts: state.profilePage.postsMessage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addNewPostActionCreator());
        },
        postChange: (text) => {
            dispatch(changeNewPostActionCreator(text));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;