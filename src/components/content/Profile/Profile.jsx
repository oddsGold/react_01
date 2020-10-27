import React from "react";
import './Profile.css';
import Posts from "../Posts/Posts";

const Profile = () => {
    return (
        <div className="profile">
            <div className="content-images">
                <img src="https://i.ytimg.com/vi/OXuIqaeg0SI/maxresdefault.jpg" alt=""/>
            </div>
            <div className="content-description">
                <p>Description</p>
            </div>

            <Posts />
        </div>
    )
}
export default Profile;