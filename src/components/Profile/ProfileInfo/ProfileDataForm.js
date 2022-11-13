import React from "react";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile}) => {
  return <form>
      <button onClick={() => {}}>save</button>
    <div>
      <b>Full name</b>: {createField('Full name', 'fullName', [], Input)}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
      {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
    </div>
    {profile.lookingForAJob && <div>
      <b>My professional skills </b>: {profile.lookingForAJobDescription}
    </div>}
    <div>
      <b>About me</b>: {profile.aboutMe}
    </div>
    {/*<div>*/}
    {/*  <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {*/}
    {/*  return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
    {/*})}*/}
    {/*</div>*/}
  </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm