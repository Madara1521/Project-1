import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem'
import Message from "./Message/message";
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <div>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}
                          placeholder={'Enter your message'}
                >
                </textarea>

                        </div>
                        <div>
                            <button onClick={onSendMessageClick}>Add message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs