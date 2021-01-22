import React, {useEffect, useState} from "react";
import {
    usersProfileTC,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfile,
    toEditMode
} from "../../redux/posts-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {isAuth} from "../../selectors/users-selectors";

// window.props = [];
function ProfileContainer(props) {
    const onSubmit = (formData) => {
        props.saveProfile(formData)
    }

    const goToEditMode = () => {
        if (!props.editMode){
            props.toEditMode(true)
        }
    }

    // window.props.push(props);
    useEffect(() => {
        let id = props.match.params.userId;
        if (!id) {
            id = props.isAuthUserId;
        }
        props.usersProfileTC(id);
        props.getUserStatus(id);
    },[props.match.params])

    return (
        <Profile
            {...props}
            isOwner={!props.match.params.userId}
            userProfile={props.userProfile}
            isAuth={props.isAuth}
            status={props.status}
            updateUserStatus={props.updateUserStatus}
            savePhoto={props.savePhoto}
            onSubmit={onSubmit}
            editMode={props.editMode}
            toEditMode={props.toEditMode}
            goToEditMode={goToEditMode}
        />
    )

}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); //HOC

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        isAuthUserId: state.auth.userId,
        isAuth: isAuth(state),
        editMode: state.profilePage.editMode
    }
}
// let UrlDataComponent = withRouter(AuthRedirectComponent); //Возвращает в ответе параметры для отслеживания URL - match->params

export default compose(
    connect(mapStateToProps, {
        usersProfileTC,
        getUserStatus,
        updateUserStatus,
        savePhoto,
        saveProfile,
        toEditMode
    }),
    withRouter
    // withAuthRedirect
)(ProfileContainer);