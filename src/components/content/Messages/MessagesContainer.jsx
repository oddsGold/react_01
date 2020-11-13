import React from "react";
import Wrapper from "../Wrapper";
import Messages from "./Messages";
import './Messages.css'
// import store from "../../redux/redux-store";
import {addNewMessageActionCreator, changeNewMessageActionCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../../storeContext";

const MessagesContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                    let addMessage = () => {
                        store.dispatch(addNewMessageActionCreator());
                    }
                    let onMessageChange = (text) => {
                        store.dispatch(changeNewMessageActionCreator(text));
                    }

                    let getMessages = () => {
                        return store.getState().dialogsPage
                    }

                    return (
                        <Wrapper>
                            <Messages addMessage={addMessage} messageChange={onMessageChange} setMessages={getMessages}/>
                        </Wrapper>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}
export default MessagesContainer;