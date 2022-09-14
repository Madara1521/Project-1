import s from './ProfileInfo.module.css'
import Kanoha from './../Kanoha.jpg'

const ProfileInfo = () => {
    return  (
        <div>
        <div>
            <img src={Kanoha}  alt={'kanoha.jpg'}/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
    )
}

export default ProfileInfo