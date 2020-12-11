import React, {useEffect} from "react";
import {usersProfileTC, getUserStatus, updateUserStatus} from "../../redux/posts-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

function ProfileContainer(props) {

    useEffect(() => {
        let id = props.match.params.userId;
        if (!id) {
            id = 13006;
        }
        props.usersProfileTC(id);
        // props.getUserStatus(id);
    })

    return (
        <Profile
            {...props}
            userProfile={props.userProfile}
            isAuth={props.isAuth}
            status={props.status}
            updateUserStatus={props.updateUserStatus}
        />
    )

}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); //HOC

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
    }
}
// let UrlDataComponent = withRouter(AuthRedirectComponent); //Возвращает в ответе параметры для отслеживания URL - match->params

export default compose(
    connect(mapStateToProps, {
        usersProfileTC,
        getUserStatus,
        updateUserStatus
    }),
    withRouter
    // withAuthRedirect
)(ProfileContainer);