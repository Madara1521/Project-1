import s from './ProfileInfo.module.css'
import Kanoha from './../Kanoha.jpg'
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img src={Kanoha} alt={'kanoha.jpg'}/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
      </div>
    </div>
  )
}

export default ProfileInfo