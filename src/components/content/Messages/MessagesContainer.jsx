import React from "react";
import Messages from "./Messages";
import './Messages.css'
import {addNewMessageAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


function MessagesContainer(props) {
    return (
        <Messages
            dialogsPage={props.dialogsPage}
            addNewMessageAC={props.addNewMessageAC}
            isAuth={props.isAuth}
        />
    )
}

// let AuthRedirectComponent = withAuthRedirect(MessagesContainer); //HOC


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, {
        addNewMessageAC
    }),
    withAuthRedirect
)(MessagesContainer);
