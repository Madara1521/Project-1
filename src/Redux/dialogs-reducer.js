const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Sla'},
        {id: 3, name: 'Gus'},
        {id: 4, name: 'Vlad'},
        {id: 5, name: 'Andreu'}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your nek?'},
        {id: 3, message: 'Yo'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body
return state
    case SEND_MESSAGE :
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.messages.push({id: 4, message: body})
        return state
    default:
        return state
}

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type :UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer