import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { withAuthRedirect } from '../Hoc/withAuthRedirect'
import { compose } from 'redux'

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    }
  }
}




export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
) (Dialogs)