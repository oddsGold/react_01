import React from "react";
import './Messages.css'
import CurrentDialog from "./CurrentDialog";
import CurrentPerson from "./CurrnetPerson";
import Wrapper from "../Wrapper";
import store from "../../redux/state";
import {addNewMessageActionCreator, changeNewMessageActionCreator} from "../../redux/state";

const Messages = (props) => {

    console.log(store.getState().dialogsPage);

    let newTextareaMessage = React.createRef();

    let addMessage = () => {
        store.dispatch(addNewMessageActionCreator());
    }
    let onMessageChange = () => {
        store.dispatch(changeNewMessageActionCreator(newTextareaMessage.current.value));
    }

    // let currentPersonEl = store.getState().dialogsPage.currentPerson.map((names, i) => (
    //     <CurrentPerson key={i} name={names.name} id={names.id}/>
    // ))

    // let currentDialogEl = store.getState().dialogsPage.currentDialog.map( (dialogs,  i) => (
    //     <CurrentDialog key={i} massage={dialogs.massage} answer={dialogs.answer} />
    // ))

    return (
        <Wrapper>
            <div className="messages">
                <div className="messages-list">
                    <CurrentPerson props={store.getState().dialogsPage.currentPerson} />
                </div>
                <div className="messages-dialogs">
                    <CurrentDialog props={store.getState().dialogsPage.currentDialog}/>
                </div>
            </div>
            <div className="messages-textarea">
                <textarea ref={newTextareaMessage} onChange={onMessageChange}
                          value={store.getState().dialogsPage.tempMessage}/>
                <input onClick={addMessage} type="submit"/>
            </div>
        </Wrapper>
    )
}
export default Messages;