import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

let path = "/dialogs/" + props.id

    return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

            <DialogItem name={"Nikita"} id={'1'}/>
            <DialogItem name={"Slavik"} id={'2'}/>
            <DialogItem name={"Stas"} id={'3'}/>
            <DialogItem name={"Vlad"} id={'4'}/>
            <DialogItem name={"Andreu"} id={'5'}/>

            </div>
            <div className={s.messages}>
                <Message message={'Hi!'}/>
                <Message message={'How is your neki4?'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    )
}

export default Dialogs