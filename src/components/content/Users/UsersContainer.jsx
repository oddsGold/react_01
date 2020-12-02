import React from "react";
import {
    setUsersActionCreator,
    signNewUserActionCreator,
    unsignNewUserActionCreator,
    setCurrentPageCreator,
    setUsersCountActionCreator,
    setIsFetchingActionCreator
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import axios from "axios";
import Users from "./Users";
import Wrapper from "../Wrapper";
import Preloader from "../../sections/preloader";
import {getUsers} from "../../api/Api";

class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
    }

    handlePageChange(pageNumber) {
        this.props.toggleIsFetching(true);
        this.setState({activePage: pageNumber});

        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
        })
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
            this.props.setUsersCount(data.totalCount)
        })
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
                        listUsers={this.props.listUsers}
                        sign={this.props.signUser}
                        unsign={this.props.unsignUser}
                        activePage={this.state.activePage}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        handlePageChange={this.handlePageChange.bind(this)}
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
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {} //Можно использовать как второй параметр в connect

export default connect(mapStateToProps,
    {
        signUser: signNewUserActionCreator,
        unsignUser: unsignNewUserActionCreator,
        setUsers: setUsersActionCreator,
        setCurrentPage: setCurrentPageCreator,
        setUsersCount: setUsersCountActionCreator,
        toggleIsFetching: setIsFetchingActionCreator
    })(UsersContainer);
