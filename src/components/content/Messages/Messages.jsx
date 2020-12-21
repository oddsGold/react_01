import React from "react";
import './Messages.css'
import CurrentDialog from "./CurrentDialog";
import CurrentPerson from "./CurrnetPerson";
import Wrapper from "../Layout/Wrapper";
import MessgaesReduxForm from "./MessagesForm";


const Messages = (props) => {

    const onSubmit = (value) => {
        props.addNewMessageAC(value.newMessageBody);
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
            <MessgaesReduxForm onSubmit={onSubmit}/>
        </Wrapper>
    )
}
export default Messages;