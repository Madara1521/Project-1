import Profile from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { getUserProfile } from '../../Redux/profile-reducer'
import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { withAuthRedirect } from '../Hoc/withAuthRedirect'
import { compose } from 'redux'

export function withRouter (Children) {
  return (props) => {

    const match = { params: useParams() }
    return <Children {...props} match={match}/>
  }
}

class ProfileContainer extends React.Component {

  componentDidMount () {
    let userId = this.props.match.params.userId
    if (!userId) { userId = 2 }
    this.props.getUserProfile(userId)
  }

  render () {
    return (
      <Profile {...this.props} profule={this.props.profile}/>
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})


export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter
) (ProfileContainer)



