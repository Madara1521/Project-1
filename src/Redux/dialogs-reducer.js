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
    ]
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE :
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            }
        default:
            return state
    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer