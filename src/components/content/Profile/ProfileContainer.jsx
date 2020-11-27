import React from "react";
import {getUserProfile} from "../../redux/posts-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.userId;
        console.log(id);
        if(!id) {
            debugger;
            id = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+id).then(response => {
            this.props.getUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile
                {...this.props}
                userProfile={this.props.userProfile}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile
    }
}

let UrlDataComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getUserProfile: getUserProfile
})(UrlDataComponent);