import React from "react";
import {
    setCurrentPageAC,
    getUresThunkCreator,
    follow,
    unFollow
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Wrapper from "../Wrapper";
import Preloader from "../../sections/preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        this.props.getUresThunkCreator(pageNumber, this.props.pageSize);
    }

    componentDidMount() {
        this.props.getUresThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return (
            <Wrapper>
                <div className="users">
                    {
                        this.props.isFetching ?
                            <Preloader/> : null
                    }

                    <Users
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        listUsers={this.props.listUsers}
                        activePage={this.state.activePage}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        handlePageChange={this.handlePageChange.bind(this)}
                        followingProgress={this.props.followingProgress}
                    />
                </div>
            </Wrapper>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        listUsers: state.usersPage.listUsers,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

let mapDispatchToProps = (dispatch) => {
} //Можно использовать как второй параметр в connect

export default compose(
    connect(mapStateToProps,
        {
            setCurrentPageAC,
            getUresThunkCreator,
            follow,
            unFollow
        }),
    withAuthRedirect
)(UsersContainer);
