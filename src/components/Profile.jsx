import React from "react";
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <div className="content-images">
                <img src="https://i.ytimg.com/vi/OXuIqaeg0SI/maxresdefault.jpg" alt=""/>
            </div>
            <div className="content-description">
                <p>Description</p>
            </div>
            <div className="content-posts">
                <p>My posts</p>
                <div className="content-posts-new">
                    <p>New post</p>
                </div>
            </div>
        </div>
    )
}
export default Profile;