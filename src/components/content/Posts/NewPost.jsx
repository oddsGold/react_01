import React from "react";
import posts from './Posts.module.css';
import {map} from "react-bootstrap/ElementChildren";

const postsMessage = [
    {
        'img': 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
        'message': 'New post',
    },
    {
        'img': 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png',
        'message': 'New post 2',
    }
]

function NewPost() {

    return (
        <div className={posts['content-posts-new-item']}>
            <div className={posts['content-posts-new-item-img']}>
                <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png" alt="betman"/>
            </div>
            <div className={posts['content-posts-new-item-description']}>
                <p>
                    New post
                </p>
            </div>
        </div>
    );
}

export default NewPost;