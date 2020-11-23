import React from "react";
import Wrapper from "../Wrapper";
import Pagination from "react-js-pagination";
import UsersList from "./UsersList";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //количество страниц при пагинации

    return (
        <Wrapper>
            <div className="users">
                <div className="users-title">
                    <h1>Users</h1>
                </div>

                <Pagination
                    activePage={props.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={props.totalUsersCount}
                    pageRangeDisplayed={5}
                    onChange={props.handlePageChange}
                />

                <UsersList
                    props={props.listUsers}
                    sign={props.signUser}
                    unsign={props.unsignUser}
                    pagesCount={pagesCount}
                />
            </div>
        </Wrapper>
    )
}

export default Users;