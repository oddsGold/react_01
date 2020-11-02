import React from "react";
import './Messages.css'

import CurrentDialog from "./CurrentDialog";
import CurrentPerson from "./CurrnetPerson";
import Wrapper from "../Wrapper";
import state from "../../redux/state";

const Messages = () => {

    let currentPersonEl = state.currentPerson.map( names =>
        <CurrentPerson key={names.id} name={names.name} id={names.id}/>
    )

    let currentDialogEl = state.currentDialog.map( dialogs =>
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
    </Wrapper>
    )
}
export default Messages;