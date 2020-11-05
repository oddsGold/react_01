import React from "react";
import './Messages.css'
import CurrentDialog from "./CurrentDialog";
import CurrentPerson from "./CurrnetPerson";
import Wrapper from "../Wrapper";
import store from "../../redux/state";
import {addNewMessageActionCreator, changeNewMessageActionCreator} from "../../redux/state";

const Messages = () => {

    let newTextareaPost = React.createRef();

    let addMessage = () => {
        store.dispatch(addNewMessageActionCreator());
    }
    let onMessageChange = () => {
        store.dispatch(changeNewMessageActionCreator(newTextareaPost.current.value));
    }

    let currentPersonEl = store.getState().dialogsPage.currentPerson.map( names =>
        <CurrentPerson key={names.id} name={names.name} id={names.id}/>
    )

    let currentDialogEl = store.getState().dialogsPage.currentDialog.map( dialogs =>
        <CurrentDialog key={dialogs.id} massage = {dialogs.massage} answer={dialogs.answer}/>
    )

    return (
    <Wrapper>
        <div className="messages">
            <div className="messages-list">
                { currentPersonEl }
            </div>
            <div className="messages-dialogs">
                { currentDialogEl }
            </div>
        </div>
        <div className="messages-textarea">
            <textarea ref={newTextareaPost} onChange={onMessageChange} value={store.getState().tempMessage}/>
            <input onClick={addMessage} type="submit"/>
        </div>
    </Wrapper>
    )
}
export default Messages;