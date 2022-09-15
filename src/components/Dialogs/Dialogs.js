import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem'
import Message from "./Message/message";

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Slavik'},
        {id: 3, name: 'Stas'},
        {id: 4, name: 'Vlad'},
        {id: 5, name: 'Andreu'}
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your neki4?'},
        {id: 3, message: 'Yo'}
    ]
    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs