import React from "react";
import {
    getMenu
} from "../../redux/navbar-reducer";
import {connect} from "react-redux";
import LeftNavbar from "./LeftNavbar";

function NavBarContainer (props) {
    return (
        <LeftNavbar menuItems={props.menuItems} />
    )
}

let mapStateToProps = (state) => {
    return{
        menuItems: state.navbar.menuItems
    }
}

export default connect(mapStateToProps, {
    getMenu
})(NavBarContainer);

