import Profile from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../Redux/profile-reducer'
import React from 'react'

class ProfileContainer extends React.Component {

  componentDidMount () {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render () {
    return (
      <Profile {...this.props} profule={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer)