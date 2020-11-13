import React from "react";
import './Messages.css'
import CurrentDialog from "./CurrentDialog";
import CurrentPerson from "./CurrnetPerson";

const Messages = (props) => {
    let newTextareaMessage = React.createRef();

    let onAddMessage = () => {
        props.addMessage()
    }
    let onMessageChange = () => {
        props.messageChange(newTextareaMessage.current.value)
    }

    return (
        <>
            <div className="messages">
                <div className="messages-list">
                    <CurrentPerson props={props.setMessages().currentPerson} />
                </div>
                <div className="messages-dialogs">
                    <CurrentDialog props={props.setMessages().currentDialog}/>
                </div>
            </div>
            <div className="messages-textarea">
                <textarea ref={newTextareaMessage} onChange={onMessageChange} value={props.setMessages().tempMessage}/>
                <input onClick={onAddMessage} type="submit"/>
            </div>
        </>
    )
}
export default Messages;