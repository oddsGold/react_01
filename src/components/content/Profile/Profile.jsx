import React from "react";
import './Profile.css';
import ProfileInfo from "./ProfileInfo";
import Wrapper from "../Wrapper";
import PostsContainer from "../Posts/PostsContainer";

const Profile = () => {
    return (
        <Wrapper>
            <div className="profile">
                <ProfileInfo />

                <PostsContainer />
            </div>
        </Wrapper>
    )
}
export default Profile;