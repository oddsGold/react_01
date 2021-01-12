import React from "react";
import {addPost, deletePost} from "../redux/posts-reducer";
import postsReducer from "../redux/posts-reducer";

let state = {
    postsMessage: [
        {
            id: 1,
            img: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
            message: 'New post',
        },
        {
            id: 2,
            img: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
            message: 'New post 2',
        }
    ]
}

it('new post should be add', () => {
    let action = addPost("Test for add new post")

    let newState = postsReducer(state, action);
    expect(newState.postsMessage.length).toBe(3);
});

it('delete post', () => {
    let action = deletePost(2)

    let newState = postsReducer(state, action);
    expect(newState.postsMessage.length).toBe(1);
});