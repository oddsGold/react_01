import React from "react";
import axios from "axios";
import Pagination from "./Pagination";

class PaginationContainer extends React.Component {

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

    render() {
        return(
            <Pagination />
        )
    }
}

export default PaginationContainer;