import React, { Component } from 'react'
import { Modal } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActionCreators from '../redux/modules/modal'
import { getDateOptionsArray } from '../helpers/utils'

class ModalContainer extends Component {
  render () {
    return (
      <Modal />
    )
  }
}

function mapStateToProps ({modal}) {
  return {
    isOpen: modal.isOpen,
    isSubmitDisabled: true,
    date: modal.date,
    month: modal.month,
    year: modal.year,
    dateOptionsArray: modal.dateArray,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(modalActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)