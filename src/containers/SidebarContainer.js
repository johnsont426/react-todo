import React, { Component } from 'react'
import { Sidebar } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todosActionCreators from '../redux/modules/todos'
import * as modalActionCreators from '../redux/modules/modal'

function mapStateToProps ({sidebar}) {
  return {
    isOpen: sidebar.get('isOpen'),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...todosActionCreators,
    ...modalActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)