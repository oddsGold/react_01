import React from "react";
import Pagination from "react-js-pagination";
import UsersList from "./UsersList";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //количество страниц при пагинации

    return (
            <>
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
                    sign={props.sign}
                    unsign={props.unsign}
                    pagesCount={pagesCount}
                />
            </>
    )
}

export default Users;