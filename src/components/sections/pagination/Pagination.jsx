import React from "react";

let Pagination = (props) => {
    return(
        <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={this.props.totalUsersCount}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
        />
    )
}

export default Pagination;