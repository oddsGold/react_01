import React from "react";
import './Profile.css';
import ProfileInfo from "./ProfileInfo";
import Wrapper from "../Wrapper";
import PostsContainer from "../Posts/PostsContainer";

let Profile = (props) => {
    return (
        <Wrapper>
            <div className="profile">
                <ProfileInfo profile={props.userProfile} />

                <PostsContainer />
            </div>
        </Wrapper>
    )
}
export default Profile;