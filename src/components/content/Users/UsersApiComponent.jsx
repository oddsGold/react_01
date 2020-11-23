import React from "react";
import './users.css'
import Wrapper from "../Wrapper";
import UsersList from "./UsersList";
import axios from "axios";
import Pagination from "react-js-pagination";
import Users from "./Users";

class UsersApiComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersCount(response.data.totalCount)
        })
    }

    render() {
        return (
            <Users
                listUsers={this.props.listUsers}
                sign={this.props.signUser}
                unsign={this.props.unsignUser}

                activePage={this.state.activePage}
                totalItemsCount={this.props.totalUsersCount}
                handlePageChange={this.handlePageChange.bind(this)}
            />
        )
    }
}


export default UsersApiComponent;