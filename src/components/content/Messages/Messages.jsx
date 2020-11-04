import React from "react";
import './Messages.css'

import CurrentDialog from "./CurrentDialog";
import CurrentPerson from "./CurrnetPerson";
import Wrapper from "../Wrapper";
import store from "../../redux/state";

const Messages = () => {

    let currentPersonEl = store.getCurrentPerson().map( names =>
        <CurrentPerson key={names.id} name={names.name} id={names.id}/>
    )

    let currentDialogEl = store.getCurrentDialog().map( dialogs =>
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