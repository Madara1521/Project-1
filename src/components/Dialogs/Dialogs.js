import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                 Nikita
                </div>
                <div className={s.dialog}>
                 Slavik
                </div>
                <div className={s.dialog}>
                 Stas
                </div>
                <div className={s.dialog}>
                 Vlad
                </div>
                <div className={s.dialog}>
                 Andreu
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