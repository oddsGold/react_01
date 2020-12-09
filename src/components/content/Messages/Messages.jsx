import React from "react";
import './Messages.css'
import CurrentDialog from "./CurrentDialog";
import CurrentPerson from "./CurrnetPerson";
import Wrapper from "../Wrapper";
import {Redirect} from 'react-router-dom'


const Messages = (props) => {
    if (!props.isAuth) {
        return (
            <Redirect to={"/login"}/>
        )
    }

    let newTextareaMessage = React.createRef();

    let onAddMessage = () => {
        props.addNewMessageAC()
    }
    let onMessageChange = () => {
        props.changeNewMessageAC(newTextareaMessage.current.value)
    }

    return (
        <Wrapper>
            <div className="messages">
                <div className="messages-list">
                    <CurrentPerson props={props.dialogsPage.currentPerson}/>
                </div>
                <div className="messages-dialogs">
                    <CurrentDialog props={props.dialogsPage.currentDialog}/>
                </div>
            </div>
            <div className="messages-textarea">
                <textarea ref={newTextareaMessage} onChange={onMessageChange} value={props.dialogsPage.tempMessage}/>
                <input onClick={onAddMessage} type="submit"/>
            </div>
        </Wrapper>
    )
}
export default Messages;