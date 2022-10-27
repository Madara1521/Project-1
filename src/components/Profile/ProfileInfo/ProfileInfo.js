import s from './ProfileInfo.module.css'
import Kanoha from './../Kanoha.jpg'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div >*/}
            {/*  <img src={Kanoha} alt={'kanoha.jpg'} className={s.sizeImg} />*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo