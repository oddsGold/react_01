import React from "react";
import './Profile.css';
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo";
import Wrapper from "../Wrapper";

const Profile = () => {
    return (
        <Wrapper>
            <div className="profile">
                <ProfileInfo />

                <Posts />
            </div>
        </Wrapper>
    )
}
export default Profile;