import React from "react";
import Messages from "./Messages";
import './Messages.css'
import {addNewMessageActionCreator, changeNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addNewMessageActionCreator());
        },
        messageChange: (text) => {
            dispatch(changeNewMessageActionCreator(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;