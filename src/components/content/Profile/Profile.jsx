import React from "react";
import './Profile.css';
import ProfileInfo from "./ProfileInfo";
import Wrapper from "../Layout/Wrapper";
import PostsContainer from "../Posts/PostsContainer";

let Profile = props => {
    return (
        <Wrapper>
            <div className="profile">
                <ProfileInfo profile={props.userProfile} status={props.status} updateUserStatus={props.updateUserStatus} isOwner={props.isOwner} savePhoto={props.savePhoto} onSubmit={props.onSubmit}/>

                <PostsContainer />
            </div>
        </Wrapper>
    )
}
export default Profile;