import React, {useEffect} from "react";
import {getUserProfile} from "../../redux/posts-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/Api";

function ProfileContainer(props) {

    useEffect(() => {
        let id = props.match.params.userId;
        if (!id) {
            id = 13006;
        }
        usersAPI.usersProfile(id).then(data => {
            props.getUserProfile(data)
        })
    })

    return (
        <Profile
            {...props}
            userProfile={props.userProfile}
        />
    )

}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile
    }
}

let UrlDataComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getUserProfile
})(UrlDataComponent);