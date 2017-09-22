import React, { Component } from 'react'
import { SingleTodo } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todosActionCreators from '../redux/modules/todos'
import * as modalActionCreators from '../redux/modules/modal'

function mapStateToProps () {
  return {}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...todosActionCreators,
    ...modalActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleTodo)