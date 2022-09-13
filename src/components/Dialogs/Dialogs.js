import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={'/dialogs/1'}>Nikita</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}>Slavik</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>Stas</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}>Vlad</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/5'}>Andreu</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>How is your neki4</div>
                <div className={s.message}>yo</div>
            </div>
        </div>
    )
}

export default Dialogs