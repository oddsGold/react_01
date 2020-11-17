const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

let initialState = {
    tempMessage: '',
    currentPerson: [
        {id: 1, name: 'Dima 1'},
        {id: 2, name: 'Dima 2'},
        {id: 3, name: 'Dima 3'},
        {id: 4, name: 'Dima 4'},
        {id: 5, name: 'Dima 5'},
        {id: 6, name: 'Dima 6'},
    ],
    currentDialog: [
        {id: 1, massage: 'Hi', answer: 'Hello'},
        {id: 2, massage: 'My name is Vasya', answer: 'Hi, Vasya'},
        {id: 3, massage: 'My name is Vova', answer: 'Hello, Vova'},
        {id: 4, massage: 'Hi. My name is Katya', answer: 'Who are you?'},
        {id: 5, massage: 'Lorem ipsum dolor ', answer: 'Are you good?'},
        {id: 6, massage: 'ng elit. Facilis, unde!6', answer: 'I am fine!'},
    ],
}

function addNewMessage(state) {
    let newMess = {
        id: 1,
        massage: state.tempMessage,
        answer: 'I am fine!'
    }
    return {
        ...state,
        currentDialog: [...state.currentDialog, newMess],
        tempMessage: ''
    };
}

function changeNewMessage(state, message) {
    return {
        ...state,
        tempMessage: message
    };
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return addNewMessage(state);
        case CHANGE_NEW_MESSAGE:
            return changeNewMessage(state, action.text);
        default:
            return state;
    }
}

export const addNewMessageActionCreator = () => {
    return {
        type: ADD_NEW_MESSAGE
    }
}
export const changeNewMessageActionCreator = (modifiedMessage) => {
    return {
        type: CHANGE_NEW_MESSAGE,
        text: modifiedMessage
    }
}

export default dialogsReducer;