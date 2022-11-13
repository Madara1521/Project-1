import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../Users/userPhoto.png'
import {useState} from "react";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

        {editMode
          ? <ProfileDataForm profile={profile}/>
          : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <div>
      <b>Full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    {profile.lookingForAJob &&
    <div>
      <b>My professional skills </b>: {profile.lookingForAJobDescription}
    </div>
    }
    <div>
      <b>About me</b>: {profile.aboutMe}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
    })}
    </div>
  </div>
}

const ProfileDataForm = ({profile}) => {
  return <div>
Form
  </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo