import React from "react";
import posts from './Posts.module.css';

const NewPost = (props) => {

    return (
        <>
            {
                props.props.map((post, i) => (
                    <div className={posts['content-posts-new-item']} key={i}>
                        <div className={posts['content-posts-new-item-img']}>
                            <img src={post.img} alt="betman"/>
                        </div>
                        <div className={posts['content-posts-new-item-description']}>
                            <p>
                                {post.message}
                            </p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default NewPost;