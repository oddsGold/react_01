import React from "react";
import Messages from "./Messages";
import './Messages.css'
import {addNewMessageAC, changeNewMessageAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";


function MessagesContainer (props) {
    return (
        <Messages
            dialogsPage={props.dialogsPage}
            addNewMessageAC={props.addNewMessageAC}
            changeNewMessageAC={props.changeNewMessageAC}
            isAuth={props.isAuth}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    addNewMessageAC,
    changeNewMessageAC
})(MessagesContainer);
