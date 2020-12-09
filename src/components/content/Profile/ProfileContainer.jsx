import React, {useEffect} from "react";
import {usersProfileTC} from "../../redux/posts-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

function ProfileContainer(props) {

    useEffect(() => {
        let id = props.match.params.userId;
        if (!id) {
            id = 13006;
        }
        props.usersProfileTC(id);
    })

    return (
        <Profile
            {...props}
            userProfile={props.userProfile}
            isAuth={props.isAuth}
        />
    )

}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth
    }
}

let UrlDataComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    usersProfileTC
})(UrlDataComponent);