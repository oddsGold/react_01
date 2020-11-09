const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

function addNewMessage (state){
    let newMess = {
        id:1,
        massage: state.tempMessage,
        answer: 'I am fine!'
    }
    state.currentDialog.push(newMess);
    state.tempMessage = '';
    debugger;
    return state;
}
function changeNewMessage(state, message){
    debugger;
    state.tempMessage = message;
}

const dialogsReducer = (state, action) => {
    if (action.type === 'ADD-NEW-MESSAGE'){
        addNewMessage(state);
    }else if (action.type === 'CHANGE-NEW-MESSAGE') {
        changeNewMessage(state, action.text);
    }
}

export default dialogsReducer;