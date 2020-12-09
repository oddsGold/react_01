import React from "react";
import './Profile.css';
import ProfileInfo from "./ProfileInfo";
import Wrapper from "../Wrapper";
import PostsContainer from "../Posts/PostsContainer";
import {Redirect} from "react-router-dom";

let Profile = (props) => {
    if (!props.isAuth) {
        return (
            <Redirect to={"/login"}/>
        )
    }

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