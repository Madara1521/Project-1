import Profile from './Profile'
import {connect} from 'react-redux'
import {getStatus, getUserProfile, savePhoto, updateStatus} from '../../Redux/profile-reducer'
import React from 'react'
import {useParams} from 'react-router-dom'
import {compose} from 'redux'
import {withAuthRedirect} from "../Hoc/withAuthRedirect";

export function withRouter(Children) {
  return (props) => {

    const match = {params: useParams()}
    return <Children {...props} match={match}/>
  }
}

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile {...this.props}
               isOwner={!this.props.match.params.userId}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}
               savePhoto={this.props.savePhoto}
      />
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})


export default compose(withAuthRedirect,
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
  withRouter
)(ProfileContainer)



